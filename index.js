const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
const config = require("./config.json");

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("./auth_info_baileys");
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === "close") {
            console.log("Connection closed, reconnecting...");
            startBot();
        } else if (connection === "open") {
            console.log("Bot Connected!");
        }
    });

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const sender = msg.key.remoteJid;
        const messageType = Object.keys(msg.message)[0];
        const text = msg.message.conversation || msg.message[messageType]?.text;

        console.log(`Received message: ${text} from ${sender}`);

        if (text === `${config.prefix}ping`) {
            await sock.sendMessage(sender, { text: "Pong! ✅" });
        } else if (text === `${config.prefix}status`) {
            await sock.sendMessage(sender, { text: "I'm online! 🚀" });
        }
    });
}

startBot();
