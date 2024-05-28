const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", ws => {
    console.log("новый клиент =)");

    ws.on("close", () => {
        console.log("клиент отключился от сети =( ");
    });
});