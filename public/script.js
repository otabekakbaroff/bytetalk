let socket = io.connect('https://bytetalk.herokuapp.com/')
let chatbox = document.querySelector(".chat-box")


socket.on('confirm',function(data){
    console.log(data)  
})


function send(){
    let message = document.querySelector(".message").value
    let name = document.querySelector(".name").value
    if (message.length > 0){
        socket.emit('message',{name:name,message:message})
        chatbox.innerHTML +='<h3>'+name+'</h3>'
        chatbox.innerHTML +='<p>'+message+'</p>'
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }
    window.scrollTo(0, chatbox.scrollHeight);
}


socket.on('message',function(data){
    chatbox.innerHTML +='<h3>'+data.name+'</h3>'
    chatbox.innerHTML +='<p>'+data.message+'</p>'
    chatbox.scrollTo(0, chatbox.scrollHeight);
})

