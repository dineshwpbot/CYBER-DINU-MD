const axios = require("axios");
const fs = require("fs");
const { exec } = require("child_process");

async function downloadAPK(sock, sender, appName) {
    const apiUrl = `https://apkdl.net/search?q=${appName}`;
    try {
        const response = await axios.get(apiUrl);
        const apkUrl = response.data.results[0].downloadLink;

        await sock.sendMessage(sender, { text: `📥 Downloading APK: ${appName}\n🔗 [Download Here](${apkUrl})` });
    } catch (error) {
        await sock.sendMessage(sender, { text: "❌ APK Download Failed!" });
    }
}

async function downloadFB(sock, sender, url) {
    const apiUrl = `https://fbdownloader.net/api?url=${encodeURIComponent(url)}`;
    try {
        const response = await axios.get(apiUrl);
        const videoUrl = response.data.videoHD || response.data.videoSD;

        await sock.sendMessage(sender, { video: { url: videoUrl }, caption: "✅ Facebook Video Downloaded!" });
    } catch (error) {
        await sock.sendMessage(sender, { text: "❌ Facebook Download Failed!" });
    }
}

async function downloadTikTok(sock, sender, url) {
    const apiUrl = `https://tiktokapi.com/api?url=${encodeURIComponent(url)}`;
    try {
        const response = await axios.get(apiUrl);
        const videoUrl = response.data.video;

        await sock.sendMessage(sender, { video: { url: videoUrl }, caption: "✅ TikTok Video Downloaded!" });
    } catch (error) {
        await sock.sendMessage(sender, { text: "❌ TikTok Download Failed!" });
    }
}

async function convertToURL(sock, sender, filePath) {
    const uploadApi = "https://file.io";
    try {
        const response = await axios.post(uploadApi, fs.createReadStream(filePath), { headers: { "Content-Type": "multipart/form-data" } });
        await sock.sendMessage(sender, { text: `📤 File Uploaded!\n🔗 [Download](${response.data.link})` });
    } catch (error) {
        await sock.sendMessage(sender, { text: "❌ File Upload Failed!" });
    }
}

module.exports = { downloadAPK, downloadFB, downloadTikTok, convertToURL };
