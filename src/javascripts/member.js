import "../sass/member.scss";
import tplHeader from "../component/header.html";
import $ from "./query";
import lineHeight from "./lineheight";
import {circleWidth, circleHeight} from "./circle";
let header = $("#header")[0];
header.innerHTML = tplHeader;
lineHeight($(".director"), $(".director")[0]);
circleWidth($(".quarter"), $(".quarter")[0]);
circleWidth($(".top-circle"), $(".top-circle")[0]);
let margin = (dom, target) => {
	let size = 1;
	for(let i = 1; i <= dom.length; i++){
		if(i % size == 0 && dom[i - 1]){
			size += target;
			dom[i - 1].style.marginLeft = '0';
		}
	}
};
margin($(".quarter"), 4);
margin($(".average-3"), 3);