require("dotenv").config();
const Telegraf = require("telegraf");
const axios = require("axios");
const session = require("telegraf/session");
const Stage = require("telegraf/stage");
const WizardScene = require("telegraf/scenes/wizard");
const { TELEGRAM_API_KEY, RAPID_API_KEY } = process.env;
const token = TELEGRAM_API_KEY;
const keyboards = require("./keyboards");

const {
    coefficientByYear,
    getPercent,
    getModel,
    getCapacity,
    getPriceByList,
} = require("./services");

const bot = new Telegraf(token);

const mainMenu = [
    [{ text: "Список машин" }],
    [{ text: "Калькулятор растоможки" }],
    [{ text: "Дата выпуска по VIN коду" }],
];

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

const getPrices = new WizardScene(
    "getPrices",
    (ctx) => {
        bot.telegram.sendMessage(ctx.chat.id, "Выберите марку:", {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: keyboards.makes,
            },
        });
        return ctx.wizard.next();
    },
    (ctx) => {
        if (ctx.message.text === "В главное меню") {
            return ctx.scene.leave();
        }
        ctx.wizard.state.make = ctx.message.text;
        let keyboardForModel = getModel(ctx.message.text);
        bot.telegram.sendMessage(ctx.chat.id, "Выберите модель:", {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: keyboardForModel,
            },
        });
        return ctx.wizard.next();
    },
    (ctx) => {
        if (ctx.message.text === "В главное меню") {
            return ctx.scene.leave();
        }
        if (ctx.message.text === "Назад") {
            return ctx.wizard.back();
        }
        ctx.wizard.state.model = ctx.message.text;
        let keyboardForCapacity = getCapacity(ctx.message.text);
        bot.telegram.sendMessage(ctx.chat.id, "Выберите объем:", {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: keyboardForCapacity,
            },
        });
        return ctx.wizard.next();
    },
    (ctx) => {
        if (ctx.message.text === "В главное меню") {
            return ctx.scene.leave();
        }
        if (ctx.message.text === "Назад") {
            return ctx.wizard.back();
        }
        ctx.wizard.state.capacity = ctx.message.text;
        let keyboardForYear = getYear(ctx.message.text, ctx.wizard.state.model);
        bot.telegram.sendMessage(ctx.chat.id, "Выберите год:", {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: keyboardForYear,
            },
        });
        return ctx.wizard.next();
    },
    (ctx) => {
        if (ctx.message.text === "В главное меню") {
            return ctx.scene.leave();
        }
        if (ctx.message.text === "Назад") {
            return ctx.wizard.back();
        }
        ctx.wizard.state.year = ctx.message.text;
        bot.telegram.sendMessage(ctx.chat.id, "Метод доставки:", {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: keyboards.dostavka,
            },
        });
        return ctx.wizard.next();
    },
    (ctx) => {
        if (ctx.message.text === "В главное меню") {
            return ctx.scene.leave();
        }
        if (ctx.message.text === "Назад") {
            return ctx.wizard.back();
        }
        ctx.wizard.state.dostavka = ctx.message.text;
        let make = ctx.wizard.state.make;
        let model = ctx.wizard.state.model;
        let year = ctx.wizard.state.year;
        let capacity = ctx.wizard.state.capacity;
        let dostavka = ctx.wizard.state.dostavka;
        let sum = getPriceByList(make, model, year, capacity, dostavka);
        bot.telegram.sendMessage(ctx.chat.id, `Сумма: ${sum}`, {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [[{ text: "В главное меню" }]],
            },
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
                keyboard: mainMenu,
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
                keyboard: mainMenu,
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
                keyboard: mainMenu,
            },
        }
    );
});

getPrices.leave((ctx) => {
    bot.telegram.sendMessage(
        ctx.chat.id,
        "Вы в главном меню! Выберите услугу.",
        {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: mainMenu,
            },
        }
    );
});

bot.hears("Список машин", (ctx) => ctx.scene.enter("getPrices"));
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
                keyboard: mainMenu,
            },
        }
    );
});

bot.launch()
    .then(() => console.log("Started"))
    .catch((err) => `ERORR ${err}`);
