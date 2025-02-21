const { downloadAPK, downloadFB, downloadTikTok, convertToURL } = require("./mediaDownloader");

async function handleCommand(sock, sender, text, message) {
    const command = text.toLowerCase().split(" ")[0];
    const args = text.split(" ").slice(1);

    if (command === "!ping") {
        await sock.sendMessage(sender, { text: "Pong! ✅" });
    
    } else if (command === "!leave") {
        if (sender.includes("g.us")) {
            const userName = "John Doe"; // DB එකකින් හෝ Firebase එකකින් ගන්න පුළුවන්
            const userAge = 25;
            const userFrom = "Colombo, Sri Lanka";
            const statusViews = Math.floor(Math.random() * 50) + 1; // Random status views

            const leaveText = `🚪 *Leaving Group!*\n\n👤 *Name:* ${userName}\n🎂 *Age:* ${userAge}\n📍 *From:* ${userFrom}\n👀 *Status Views:* ${statusViews}\n\n🤔 *React කරන්න:* (👍, ❤️, 😂, 😢, 😡)`;
            await sock.sendMessage(sender, { text: leaveText });

            await sock.groupLeave(sender);
        } else {
            await sock.sendMessage(sender, { text: "❌ This command only works in groups!" });
        }
    
    } else if (command === "!me") {
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${sender}\nTEL;type=CELL:${sender.replace("@s.whatsapp.net", "")}\nEND:VCARD`;
        await sock.sendMessage(sender, { contacts: { displayName: "Your Details", contacts: [{ vcard }] } });

    } else if (command === "!apk") {
        if (args.length === 0) return await sock.sendMessage(sender, { text: "❌ Please specify an app name!" });
        await downloadAPK(sock, sender, args.join(" "));

    } else if (command === "!fb") {
        if (args.length === 0) return await sock.sendMessage(sender, { text: "❌ Please provide a Facebook video URL!" });
        await downloadFB(sock, sender, args[0]);

    } else if (command === "!tiktok") {
        if (args.length === 0) return await sock.sendMessage(sender, { text: "❌ Please provide a TikTok video URL!" });
        await downloadTikTok(sock, sender, args[0]);

    } else if (command === "!tourl") {
        if (!message.message || !message.message.videoMessage) return await sock.sendMessage(sender, { text: "❌ Please reply to a media file!" });
        const filePath = `./downloads/${message.key.id}.mp4`;
        await convertToURL(sock, sender, filePath);
    }
}

module.exports = { handleCommand };
