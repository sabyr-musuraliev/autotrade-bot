const axios = require("axios");
const WizardScene = require("telegraf/scenes/wizard");
const { RAPID_API_KEY } = process.env;

const getYear = new WizardScene(
    "getYear",
    (ctx) => {
        ctx.reply("Введите VIN код авто:", {
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
                ctx.reply(`Год выпуска: ${response.data.year}`);
            })
            .catch(function (error) {
                console.error(error);
                ctx.reply("Произошла ошибка при получении данных.");
            });
    }
);

module.exports = getYear;
