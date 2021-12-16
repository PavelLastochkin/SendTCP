require('dotenv').config();
const send = require('./SendTCP');
console.log('Привет сервер');

send('Привет от клиента')
//console.log(process.env.PORT)