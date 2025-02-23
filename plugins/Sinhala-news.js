
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const kaliya = `https://kaliya-x-api-aa295bddf395.herokuapp.com/news`



//============================================
cmd({
    pattern: "itn",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/itn`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 ITN NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "derana",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/derana`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 DERANA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "hiru",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/hiru`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 HIRU NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.img }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "siyatha",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/siyatha`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 SIYATHA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "dasathalanka",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/dasathalankanews`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 DASATHA LANKA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "bbc",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/bbc`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 BBC NEWS 📰
            
*News Title:* ${news.result.title}


*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "lankadeepa",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/lankadeepa`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 LANKADEEPA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "siyatha",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/siyatha`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 SIYATHA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "silumina",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/silumina`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 SILUMINA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "gosiplanka",
    react: "📄",
    desc: "news",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        let news = await fetchJson(`${kaliya}/gossiplankanews`);
        
        if (news.status) {
            
            // Craft the message
            const message = `            
📰 GOSSIPLANKA NEWS 📰
            
*News Title:* ${news.result.title}

*Date:*: ${news.result.date}

*Description:* ${news.result.desc}


> *POWERED BY 𝗖𝗬𝗕𝗘𝗥-𝗗𝗜𝗡𝗨-𝗠𝗗*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: news.result.image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
