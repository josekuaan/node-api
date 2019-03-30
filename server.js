const net = require('net')

const server = net.createServer((socket) =>{
 console.log('connection from ', + socket.remoteAddress)
 socket.end('Hello world \n')
})

server.listen(3000,'127.0.0.1')