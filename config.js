const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "add your session id",
MONGODB: process.env.MONGODB || "mongodb://mongo:UulqRzbarHKPlTmjsXTUnyCBstadpehV@junction.proxy.rlwy.net:59009",
FILENAME: process.env.FILENAME || "CYBER-DINU-MD",
CHANNEL_NAME: process.env.CHANNEL_NAME || "🥷 CYBER-DINU-MD-V1 🥷",
NEWSLETTER_ID: process.env.NEWSLETTER_ID || "120363303242803015@newsletter",
TITLE: process.env.TITLE || "CYBER-DINU-MD-V1",
BODY: process.env.BODY || "CREATED BY CYBER DINU ID & ID TEM🥷",
WORK_TYPE: process.env.WORK_TYPE || "only_group",
WEBURL: process.env.WEBURL|| "https://github.com/BLACKY-X-MD/CYBER-DINU-MDt",
BOT_IMG: process.env.BOT_IMG || "https://i.ibb.co/dJPR3mss/4fee3389898c57cf.jpg"     
};
