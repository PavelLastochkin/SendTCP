
const net = require('net');

const port = process.env.PORT || 8888
const host = process.env.HOST || '127.0.0.1'

const sendTCP = (message)=>{
const client = new net.Socket();
client.connect(port, host,function(){
client.write(message)
})
}

module.exports= sendTCP;