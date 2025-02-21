async function checkStatus(sock, status) {
    if (!status.message || !status.key) return;

    const sender = status.key.remoteJid;
    console.log(`Status seen: ${sender}`);

    await sock.readMessages([status.key]);

    if (status.message.conversation) {
        await sock.sendMessage(sender, { text: "🔥Nice Status!" });
    }
}

module.exports = { checkStatus };
