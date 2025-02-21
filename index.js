const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const qrcode = require("qrcode-terminal");
const config = require("./config.json");
const { handleCommand } = require("./commands");
const { checkStatus } = require("./statusHandler");
const { downloadMedia } = require("./mediaDownloader");
const { aiChat } = require("./aiHandler");
const { handleGroup } = require("./groupHandler");

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("./auth_info_baileys");
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on("creds.update", saveCreds);
    sock.ev.on("connection.update", update => {
        if (update.connection === "open") console.log("Bot Connected!");
        else if (update.connection === "close") startBot();
    });

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const sender = msg.key.remoteJid;
        const messageType = Object.keys(msg.message)[0];
        const text = msg.message.conversation || msg.message[messageType]?.text || "";

        console.log(`Message: ${text} from ${sender}`);

        if (text.startsWith(config.prefix)) {
            await handleCommand(sock, sender, text);
        } else if (text.toLowerCase().includes("dinu")) {
            await sock.sendMessage(sender, { text: "ඔයා මට කතා කළාද? 😃" });
        }
    });

    sock.ev.on("status.update", async (status) => {
        await checkStatus(sock, status);
    });

    sock.ev.on("group-participants.update", async (groupUpdate) => {
        await handleGroup(sock, groupUpdate);
    });
}

startBot();
