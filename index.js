require("dotenv").config();
const Telegraf = require("telegraf");
const axios = require("axios");
const session = require("telegraf/session");
const Stage = require("telegraf/stage");
const WizardScene = require("telegraf/scenes/wizard");
const { TELEGRAM_API_KEY, RAPID_API_KEY } = process.env;
const token = TELEGRAM_API_KEY;

const { coefficientByYear, getPercent } = require("./services");

const bot = new Telegraf(token);

const calculateAuto = new WizardScene(
    "calculate",
    (ctx) => {
        bot.telegram.sendMessage(ctx.chat.id, "Выберите год авто:", {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [
                    [{ text: "2023" }, { text: "2022" }, { text: "2021" }],
                    [
                        { text: "2020" },
                        { text: "2019" },
                        { text: "2018" },
                        { text: "2017" },
                    ],
                    [{ text: "В главное меню" }],
                ],
            },
        });
        return ctx.wizard.next();
    },
    (ctx) => {
        if (ctx.message.text === "В главное меню") {
            return ctx.scene.leave();
        }
        ctx.wizard.state.year = Number(ctx.message.text);
        bot.telegram.sendMessage(ctx.chat.id, "Выберите вид топлива:", {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [
                    [{ text: "Бензин/Гибрид/Газ" }],
                    [{ text: "Дизель" }],
                    [{ text: "В главное меню" }],
                ],
            },
        });
        return ctx.wizard.next();
    },
    (ctx) => {
        if (ctx.message.text === "В главное меню") {
            return ctx.scene.leave();
        }
        ctx.wizard.state.engine = ctx.message.text;
        bot.telegram.sendMessage(
            ctx.chat.id,
            "Введите объем двигателя в куб.см. Пример: 1490",
            {
                reply_markup: {
                    resize_keyboard: true,
                    one_time_keyboard: true,
                    keyboard: [[{ text: "В главное меню" }]],
                },
            }
        );
        return ctx.wizard.next();
    },
    (ctx) => {
        if (ctx.message.text === "В главное меню") {
            return ctx.scene.leave();
        }
        ctx.wizard.state.capacity = Number(ctx.message.text);
        const year = ctx.wizard.state.year;
        const engine = ctx.wizard.state.engine;
        const capacity = ctx.wizard.state.capacity;

        const coefficient = coefficientByYear(year, engine, capacity);
        const percentTax = getPercent(year);

        const carPrice = capacity * coefficient;

        let nds = carPrice * 0.0025;
        let duty = carPrice * percentTax;
        let tax = (carPrice + duty) * 0.12;

        let sum = nds + duty + tax;

        bot.telegram.sendMessage(
            ctx.chat.id,
            `Сумма растаможки составляет: ${Math.ceil(sum)}$`,
            {
                reply_markup: {
                    resize_keyboard: true,
                    one_time_keyboard: true,
                    keyboard: [[{ text: "В главное меню" }]],
                },
            }
        );
    }
);

const getYear = new WizardScene(
    "getYear",
    (ctx) => {
        bot.telegram.sendMessage(ctx.chat.id, `Введите VIN код авто:`, {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [[{ text: "В главное меню" }]],
            },
        });
    },
    (ctx) => {
        if (ctx.message.text === "В главное меню") {
            return ctx.scene.leave();
        }

        const options = {
            method: "GET",
            url: "https://vindecoder.p.rapidapi.com/decode_vin",
            params: { vin: ctx.message.text },
            headers: {
                "X-RapidAPI-Key": RAPID_API_KEY,
                "X-RapidAPI-Host": "vindecoder.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }
);

const stage = new Stage();
stage.register(calculateAuto);
stage.register(getYear);

bot.use(session());
bot.use(stage.middleware());

bot.start((ctx) => {
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Добро пожаловать! Выберите услугу.",
        {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [
                    [{ text: "Калькулятор растоможки" }],
                    [{ text: "Дата выпуска по VIN коду" }],
                ],
            },
        }
    );
});

calculateAuto.leave((ctx) => {
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Вы в главном меню! Выберите услугу.",
        {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [
                    [{ text: "Калькулятор растоможки" }],
                    [{ text: "Дата выпуска по VIN коду" }],
                ],
            },
        }
    );
});

getYear.leave((ctx) => {
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Вы в главном меню! Выберите услугу.",
        {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [
                    [{ text: "Калькулятор растоможки" }],
                    [{ text: "Дата выпуска по VIN коду" }],
                ],
            },
        }
    );
});

bot.hears("Калькулятор растоможки", (ctx) => ctx.scene.enter("calculate"));
bot.hears("Дата выпуска по VIN коду", (ctx) => ctx.scene.enter("getYear"));

bot.hears("В главное меню", (ctx) => {
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Вы в главном меню! Выберите услугу.",
        {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [
                    [{ text: "Калькулятор растоможки" }],
                    [{ text: "Дата выпуска по VIN коду" }],
                ],
            },
        }
    );
});

bot.launch()
    .then(() => console.log("Started"))
    .catch((err) => `ERORR ${err}`);
