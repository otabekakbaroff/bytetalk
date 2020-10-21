const express = require("express") 
const server = express();
const socket = require("socket.io")
const http = require("http");
const app = http.createServer(server);



app.listen(process.env.PORT, ()=>{console.log(`*** Runnig on port ${process.env.PORT}`)})

server.use(express.static("public"));


var io = socket(app)


io.on("connection",function(socket){
    io.sockets.emit("confirm","success")
    console.log(`New Connection Id: ${socket.id}`)
    socket.on('message',function(data){
        console.log(data)
        socket.broadcast.emit('message',data)
    })

})