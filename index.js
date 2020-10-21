const express = require("express") 
const server = express();
const socket = require("socket.io")
const http = require("http");
const app = http.createServer(server);


const port = 5000;



app.listen(port, ()=>{console.log(`*** Runnig on port ${port}`)})

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