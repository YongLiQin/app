import $ from './query';
import {circleWidth, circleHeight} from "./circle";
export default (direction, content) => {
	let chat = $('#chat')[0];
	let time = $('.time');
	if (!time.length){
		let div = document.createElement('div');
		div.className = 'time';
		let str = `${new Date().getHours()}:
		${new Date().getMinutes()}:
		${new Date().getSeconds()}`
		div.innerHTML = str;
		chat.appendChild(div);
	} else {
		let times = time[time.length - 1].innerHTML.split(':');
		let pre = 0;
		pre += times[0].trim() * 60 * 60 * 1000;
		pre += times[1].trim() * 60 * 1000;
		pre += times[2].trim() * 1000;
		console.log(times[2].trim());
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
		let seconds = new Date().getSeconds();
		let now = hours * 60 * 60 * 1000;
		now += minutes * 60 * 1000;
		now += seconds * 1000;
		if(now - pre >= 1000 * 60){
			let div = document.createElement('div');
			div.className = 'time';
			let str = `${new Date().getHours()}:
			${new Date().getMinutes()}:
			${new Date().getSeconds()}`
			div.innerHTML = str;
			chat.appendChild(div);
		}
	};
	
	let wrap = document.createElement("div");
	wrap.className = 'clearfix chat-group';
	let circle = document.createElement("div");
	let msg = document.createElement("div");
	circle.className = `pull-${direction} circle circle-${direction}`;
	msg.className = `pull-${direction} chat-control`;

	if ( typeof content != "object") {
		msg.innerHTML = content;
	} else {
		let reader = new FileReader();
		reader.readAsDataURL(content);
		reader.onload = function () {
			let img = document.createElement('img');
			img.src = this.result;
			msg.appendChild(img);
		};
	}
	wrap.appendChild(circle);
	wrap.appendChild(msg);
	chat.appendChild(wrap);
	circleWidth($(".circle"), $(".circle")[0]);
	chat.scrollTop = chat.scrollHeight - chat.offsetHeight;
};