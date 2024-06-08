const WizardScene = require("telegraf/scenes/wizard");
const { coefficientByYear, getPercent } = require("../services/calculationService");
const { mainMenuKeyboard } = require("../utils/keyboards");

const calculateAuto = new WizardScene(
    "calculate",
    (ctx) => {
        ctx.reply("Выберите год авто:", {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [
                    [{ text: "2023" }, { text: "2022" }, { text: "2021" }],
                    [{ text: "2020" }, { text: "2019" }, { text: "2018" }, { text: "2017" }],
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
        ctx.reply("Выберите вид топлива:", {
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
        ctx.reply("Введите объем двигателя в куб.см. Пример: 1490", {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [[{ text: "В главное меню" }]],
            },
        });
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

        ctx.reply(`Сумма растаможки составляет: ${Math.ceil(sum)}$`, {
            reply_markup: {
                resize_keyboard: true,
                one_time_keyboard: true,
                keyboard: [[{ text: "В главное меню" }]],
            },
        });
    }
);

module.exports = calculateAuto;
