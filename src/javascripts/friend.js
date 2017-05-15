import "../sass/friend.scss";
import tplHeader from "../component/header.html";
import tplFooter from "../component/footer.html";
import tplNavbar from "../component/navbar.html";
import $ from "./query";
import renderStyle from './renderstyle';
import {circleWidth, circleHeight} from "./circle";
import lineHeight from "./lineheight";
const header = $("#header")[0];
const footer = $("#footer")[0];
const navBar = $("#navBar")[0];
header.innerHTML = tplHeader;
footer.innerHTML = tplFooter;
navBar.innerHTML = tplNavbar;
circleHeight($(".circle"), $("#circle-wrap")[0]);
// lineHeight($(".friend-msg"), $(".friend-msg")[0]);
lineHeight($(".send-msg"), $(".send-msg")[0]);

let news = {
	src: 'http://localhost:8080/images/star.jpg',
	new1: "haha",
	new2: 'hehe'
};
render([news, news]);

function render (msg) {
	let content = $("#content")[0];
	for(let i = 0; i < msg.length; i++){
		content.innerHTML += '<div class="friend-group">' +
			'<div class="friend-group-in">' +
				'<div id="circle-wrap" class="circle-wrap pull-left">' +
					`<div style="background-image: url(${msg[i].src}) ;" class="circle"></div>` +
				'</div>' +
				'<div class="pull-left friend-msg">' +
					`<p>${msg[i].new2}</p>` +
					`<p>${msg[i].new1}</p>` +
				'</div>' +
				'<div class="pull-right send-msg">' +
					'<a class="btn">发消息</a>' +
				'</div>' +
			'</div>'+
		'</div>';
	}
	circleHeight($(".circle"), $("#circle-wrap")[0]);
	lineHeight($(".send-msg"), $(".send-msg")[0]);
};
