require("dotenv").config();
const Telegraf = require("telegraf");
const session = require("telegraf/session");
const Stage = require("telegraf/stage");

const { TELEGRAM_API_KEY } = process.env;
const bot = new Telegraf(TELEGRAM_API_KEY);

const mainMenu = [
    [{ text: "Список машин" }],
    [{ text: "Калькулятор растоможки" }],
];

const calculateAuto = require('./scenes/calculateAuto');
const getYear = require('./scenes/getYear');
const getPrices = require('./scenes/getPrices');

const stage = new Stage();
stage.register(calculateAuto);
stage.register(getYear);
stage.register(getPrices);

bot.use(session());
bot.use(stage.middleware());

bot.start((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Добро пожаловать! Выберите услугу.", {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: mainMenu,
        },
    });
});

calculateAuto.leave((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Вы в главном меню! Выберите услугу.", {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: mainMenu,
        },
    });
});

getYear.leave((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Вы в главном меню! Выберите услугу.", {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: mainMenu,
        },
    });
});

getPrices.leave((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Вы в главном меню! Выберите услугу.", {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: mainMenu,
        },
    });
});

bot.hears("Список машин", (ctx) => ctx.scene.enter("getpprices"));
bot.hears("Калькулятор растоможки", (ctx) => ctx.scene.enter("calculate"));

bot.hears("В главное меню", (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Вы в главном меню! Выберите услугу.", {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: mainMenu,
        },
    });
});

bot.launch()
    .then(() => console.log("Started"))
    .catch((err) => console.error(`ERROR ${err}`));
