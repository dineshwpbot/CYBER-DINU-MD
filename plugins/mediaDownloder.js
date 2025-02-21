const ytdl = require("ytdl-core");

async function downloadMedia(sock, sender, query, type) {
    if (!query) {
        await sock.sendMessage(sender, { text: "🔍 Please provide a search query!" });
        return;
    }

    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    const videoInfo = await ytdl.getInfo(url);
    const format = type === "audio" ? ytdl.chooseFormat(videoInfo.formats, { filter: "audioonly" }) : ytdl.chooseFormat(videoInfo.formats, { quality: "highestvideo" });

    await sock.sendMessage(sender, { text: `🔽 Downloading ${type} for: ${query}` });
    await sock.sendMessage(sender, { document: { url: format.url }, mimetype: type === "audio" ? "audio/mp3" : "video/mp4", fileName: `${query}.${type}` });
}

module.exports = { downloadMedia };
