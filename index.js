const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const { handleCommand } = require("./commands");
const { checkStatus } = require("./statusHandler");
const { Boom } = require("@hapi/boom");
const fs = require("fs");

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("auth_info_baileys");

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on("creds.update", saveCreds);
    
    sock.ev.on("messages.upsert", async (msg) => {
        const message = msg.messages[0];
        if (!message.message) return;

        const sender = message.key.remoteJid;
        const text = message.message.conversation || message.message.extendedTextMessage?.text || "";

        await handleCommand(sock, sender, text, message);
    });

    sock.ev.on("status.update", async (status) => {
        await checkStatus(sock, status);
    });

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === "close") {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
            if (shouldReconnect) startBot();
        } else if (connection === "open") {
            console.log("✅ Bot Connected!");
        }
    });
}

startBot();
