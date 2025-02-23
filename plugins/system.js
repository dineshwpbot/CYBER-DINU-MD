const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "To Check uptime , ram and more.",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let status = `
◆ 𝗖𝗬𝗕𝗘𝗥 𝗗𝗜𝗡𝗨 𝗠𝗗 𝗩1 𝗪𝗔 𝗕𝗢𝗧👨‍💻
╭────Qᴜᴇᴇɴ_ᴇꜱʜᴜ-ᴍᴅ─────●●►
│⏰𝚄𝙿𝚃𝙸𝙼𝙴 : ${runtime(process.uptime())}
│📟𝚁𝙰𝙼 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│⚙️𝙿𝙻𝙰𝚃𝙵𝚁𝙾𝙼 : ${os.hostname()}
│👨‍💻𝚂𝚄𝙿𝙾𝚁𝚃.𝙱𝚈 : ᴡʜɪᴛᴇ ᴠɪᴘᴇʀ
