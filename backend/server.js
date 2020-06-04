const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();


app.set('port', process.env.PORT);

const server = http.createServer(app);

console.log(process.env.PORT)


server.listen(process.env.PORT || 5000);   

