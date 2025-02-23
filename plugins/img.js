const axios = require('axios');
const { cmd, commands } = require('../command');

const GOOGLE_API_KEY = 'AIzaSyDebFT-uY_f82_An6bnE9WvVcgVbzwDKgU'; // Replace with your Google API key
const GOOGLE_CX = '45b94c5cef39940d1'; // Replace with your Google Custom Search Engine ID

cmd({
    pattern: "img",
    desc: "Search and send images from Google.",
    react: "馃柤锔�",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("蟻鈩撗斘毖曆� 蟻褟蟽谓喂鈭傃� 伪 褧褦伪褟垄薪 q蠀褦褟褍 茠蟽褟 褌薪褦 喂屑伪g褦.");

        // Fetch image URLs from Google Custom Search API
        const searchQuery = encodeURIComponent(q);
        const url = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&cx=${GOOGLE_CX}&key=${GOOGLE_API_KEY}&searchType=image&num=5`;
        
        const response = await axios.get(url);
        const data = response.data;

        if (!data.items || data.items.length === 0) {
            return reply("畏蟽 喂屑伪g褦褧 茠蟽蠀畏鈭� 茠蟽褟 褍蟽蠀褟 q蠀褦褟褍.");
        }

        // Send images
        for (let i = 0; i < data.items.length; i++) {
            const imageUrl = data.items[i].link;

            // Download the image
            const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const buffer = Buffer.from(imageResponse.data, 'binary');

            // Send the image with a footer
            await conn.sendMessage(from, {
                image: buffer,
                caption: `
馃専 *Image ${i + 1} from your search!* 馃専
鉁� 饾悞饾悁饾悓饾悢饾悜饾悁饾悎 饾悓饾悆-饾悤饾悗 饾悎饾悓饾悊 饾悆饾悗饾悥饾悕饾悑饾悗饾悁饾悆饾悇饾悜 鉁�
        褦畏谞蟽褍 褌薪褦褧褦 喂屑伪g褦褧! 馃摳
`
}, { quoted: mek });
}

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
