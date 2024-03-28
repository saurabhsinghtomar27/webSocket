import express from 'express';
import { Server } from 'socket.io';
import  http from 'http';
import path from 'path';
const app = express()
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static(path.resolve("./frontend")));
io.on('connection', (socket) => {
    socket.on("user-message",(message)=>{
        io.emit("message",message)
    })
});
app.get('/', (req, res) => {
    res.sendFile('/frontend/index.html')
})
server.listen(port, () => {
    console.log("server started")
})