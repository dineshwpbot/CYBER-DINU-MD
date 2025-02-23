const config = require('../config')
const {cmd , commands} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "ping",
    desc: "check bot owner",
    react: '⏱️',
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
var kaliyaload = [
"___________________🏃",
"_________________🏃__",
"_______________🏃____",
"_____________🏃______",
"___________🏃________",
"_________🏃__________",
"_______🏃____________",
"_____🏃______________",
"___🏃________________",   
"_🏃___________________",
"*⏱️ᴘᴏɴɢ : ${ping} ᴍꜱ*"
]
let { key } = await conn.sendMessage(from, {text: 'Please Wait..'})
for (let i = 0; i < kaliyaload.length; i++) {
await conn.sendMessage(from, {text: kaliyaload[i], edit: key })
}
} catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
console.log(e)
reply(`❌ *Error Accurated !!*\n\n${e}`)
}
})	
