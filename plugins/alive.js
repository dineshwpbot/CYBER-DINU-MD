const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "To Check the bot online or no.",
    react: "💌",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const voice = {
    alive: 'media/media_alive.mp3'
}

let aliveMessage = `
🎗️Hᴇʏ 👋 ${pushname}  , 
Welcome  to *ᴄʏʙᴇʀ-ᴅɪɴᴜ-ᴍᴅ ʙᴏᴛ*✨🪼
So , I think this bots are useful 
to you . 😊
Nice to meet you 🤝
*Thankyou* ♥️ 🪄 

*🧫 𝙵𝙾𝙻𝙻𝙾𝚆𝚄𝚂🪐*

[📡].ᴡʜᴀᴛꜱᴀᴘᴘ ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ:- https://chat.whatsapp.com/F3oYqCVJLcR3OQWOCQz0m3


[📡].ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ:- https://chat.whatsapp.com/F3oYqCVJLcR3OQWOCQz0m3

  𝐎𝐖𝐍𝐄𝐑 :- 𝗖𝗬𝗕𝗘𝗥 𝗗𝗜𝗡𝗨 𝗜𝗗
  𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 :- +94753262213
    
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:aliveMessage},{quoted: mek})

}catch(e){
console.log(e)
reply(`αη єяяσя`)
}
})
