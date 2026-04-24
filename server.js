const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8802 });
wss.on("connection", (ws) => {
    console.log("connection stablish");
    ws.on("message", (data) => {
        console.log(`client has sent : ${data}`)
    })
    ws.on("close", () => {
        console.log("client disconected");
    });
})