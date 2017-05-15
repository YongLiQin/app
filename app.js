const ws = require('ws');
const path = require('path');
const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const router = express.Router();

app.use(router);
app.use(express.static(path.join(__dirname, "public")));

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

const io = new ws.Server({server});

var msg = {};

io.on('connection', (socket) => {
	socket.on('message', (data) => {
		if (Buffer.isBuffer(data)){
			msg.data = data;
			return;
		}

		let obj = JSON.parse(data);
		for(let key in obj){
			msg[key] = obj[key];
		}		

		if(msg.login){
			socket.username = msg.username;
			return;
		}
		
		io.clients.forEach(client => {
		console.log(msg.other);
			let others = msg.other.split(',');
			for(let i = 0; i < others.length; i++){
				if(client.username == others[i]){
					client.send(msg.data);
				}
			}
		});

		msg = {};
	});
});

server.listen(port, () => {
	console.log(`server have run at ${port} port`);
});