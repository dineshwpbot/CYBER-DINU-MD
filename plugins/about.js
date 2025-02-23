const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "about",
    desc: "To get the bot informations.",
    react: "鈩癸笍",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let about = ` 馃憢 饾悋饾悇饾悑饾悑饾悗饾悥 饾悡饾悋饾悇饾悎饾悜
              ${senderNumber} 
              饾悎 饾悁饾悓 饾悜饾悁饾悞饾悓饾悢饾悜饾悁饾悎 饾悓饾悆 饾悤0 饾悥饾悋饾悁饾悡饾悞饾悁饾悘饾悘 饾悂饾悗饾悡
              饾悅饾悜饾悇饾悁饾悡饾悇饾悆 饾悂饾悩 饾悜饾悢饾悐饾悞饾悋饾悁饾悕 & 饾悏饾悁饾悘饾悁饾悓饾悇饾悇饾悞 饾悡饾悇饾悓馃憢
              
              > *庐 饾殏饾櫚饾櫦饾櫢饾殎饾櫚饾櫢 饾櫦饾櫝 饾殔0 岽∈溼磤散隃贬磤岽樶礃 蕶岽忈礇*
              > *岽∈溼磤岽€岽涥湵岽€岽樶礃 岽勈溼磤纱岽囀� :*https://whatsapp.com/channel/0029Vb4gX4ZBlHpjHyuFre3O          
              褌薪伪畏泻褧 茠蟽褟 蠀褧喂畏g 蕚伪杀蠀删伪喂 杀詢 莎薪伪褌褧伪蟻蟻 胁蟽褌 屑鈭俙
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

 
