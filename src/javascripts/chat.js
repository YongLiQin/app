import "../sass/chat.scss";
import tplHeader from "../component/header.html";
import $ from "./query";
import fetch from "./fetch";
import renderChat from './renderchat';
import rendertext from './rendertext';
const header = $("#header")[0];
const chat = $("#chat")[0];
const image = $('#image')[0];
const send = $('#send')[0];
const msg = $('#msg')[0];

header.innerHTML = tplHeader;

chat.scrollTop = chat.scrollHeight - chat.offsetHeight;

localStorage.setItem('username', '覃永利');

localStorage.setItem('other', '石强华');

rendertext($('#app-name')[0], `${localStorage.username},
	${localStorage.other}`);

const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
	let data = {
		login: true,
		username: localStorage.username
	};
	socket.send(JSON.stringify(data));
};

socket.onmessage = (e) => {
	renderChat('right', e.data);
};

send.onclick = () => {
	let data = {
		login: false,
		array: false,
		other: "覃永前,覃雪琴,石强华",
		data: msg.value
	};

	socket.send(JSON.stringify(data));
	renderChat('left', msg.value);
};

image.onchange = function () {
	socket.send(this.files[0]);
	renderChat('left', this.files[0]);
	let data = {
		login: false,
		array: false,
		other: "覃永前"
	};
	socket.send(JSON.stringify(data));
};