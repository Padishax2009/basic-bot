const TelegramBot = require("node-telegram-bot-api");

const token = "6305959072:AAHd8EstDvVjru7Cct0SSIoqtw5kEz5xvmQ";

const bot = new TelegramBot(token, { polling: true});

bot.onText(/\/start/,(msg) => {
const id = msg.chat.id;
bot.sendMessage(id, "Salom " + msg.from.first_name + "bizning botimizga xush kelibsiz!" );



});






