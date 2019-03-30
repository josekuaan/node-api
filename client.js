

const net = require('net')

const client = new net.Socket()

client.connect(3000, '127.0.0.1')


    client.on('data', (err,data)=>{
        console.log('Data :', data)
        client.destroy()
      })




client.on('close',()=>{
  console.log('connection close');
})