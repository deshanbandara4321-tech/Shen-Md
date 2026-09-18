const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://cloud.laksidu.site/dl/TDlzWsidKr/IMG-20260916-WA0006.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 𝖲𝖧𝖤𝖭-𝖬𝖣 Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
