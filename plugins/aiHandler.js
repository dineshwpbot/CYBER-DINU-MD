const axios = require("axios");

async function aiChat(sock, sender, query) {
    const res = await axios.get(`https://api.sometextapi.com/ai?query=${query}`);
    await sock.sendMessage(sender, { text: res.data.response });
}

module.exports = { aiChat };
