const WizardScene = require("telegraf/scenes/wizard");
const {
    getModel,
    getCapacity,
    getYearForList,
    getPriceByList,
} = require("../services/priceService");
const keyboards = require("../utils/keyboards");

const getPrices = new WizardScene(
    "getpprices",
    (ctx) => {
        ctx.reply("Выберите марку:", {
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
        ctx.reply("Выберите модель:", {
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
        ctx.reply("Выберите объем:", {
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
        let keyboardForYear = getYearForList(
            ctx.message.text,
            ctx.wizard.state.model
        );
        ctx.reply("Выберите год:", {
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
        ctx.reply("Метод доставки:", {
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
        ctx.reply(`Сумма: ${sum}`, {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [[{ text: "В главное меню" }]],
            },
        });
    }
);

module.exports = getPrices;
