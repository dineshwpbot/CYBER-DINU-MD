async function handleGroup(sock, groupUpdate) {
    if (groupUpdate.action === "add") {
        await sock.sendMessage(groupUpdate.id, { text: "👋 Welcome to the group!" });
    } else if (groupUpdate.action === "remove") {
        await sock.sendMessage(groupUpdate.id, { text: "Goodbye! 👋" });
    }
}

module.exports = { handleGroup };
