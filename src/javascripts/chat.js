import "../sass/chat.scss";
import tplHeader from "../component/header.html";
import {$, $$} from "./query";
import {circleWidth, circleHeight} from "./circle";
var header = $("#header");
header.innerHTML = tplHeader;
circleWidth($$(".circle"), $("#circle"));
var chat = $("#chat");
chat.scrollTop = chat.scrollHeight - chat.offsetHeight;