const { downloadMedia } = require("./mediaDownloader");
const { aiChat } = require("./aiHandler");

async function handleCommand(sock, sender, text) {
    const command = text.toLowerCase();

    if (command === "!ping") {
        await sock.sendMessage(sender, { text: "Pong! ✅" });
    } else if (command.startsWith("!song")) {
        const query = text.replace("!song", "").trim();
        await downloadMedia(sock, sender, query, "audio");
    } else if (command.startsWith("!video")) {
        const query = text.replace("!video", "").trim();
        await downloadMedia(sock, sender, query, "video");
    } else if (command.startsWith("!ai")) {
        const query = text.replace("!ai", "").trim();
        await aiChat(sock, sender, query);
    }
}

module.exports = { handleCommand };const { downloadMedia } = require("./mediaDownloader");
const { aiChat } = require("./aiHandler");

async function handleCommand(sock, sender, text) {
    const command = text.toLowerCase();

    if (command === "!ping") {
        await sock.sendMessage(sender, { text: "Pong! ✅" });
    } else if (command.startsWith("!song")) {
        const query = text.replace("!song", "").trim();
        await downloadMedia(sock, sender, query, "audio");
    } else if (command.startsWith("!video")) {
        const query = text.replace("!video", "").trim();
        await downloadMedia(sock, sender, query, "video");
    } else if (command.startsWith("!ai")) {
        const query = text.replace("!ai", "").trim();
        await aiChat(sock, sender, query);
    }
}

module.exports = { handleCommand };
