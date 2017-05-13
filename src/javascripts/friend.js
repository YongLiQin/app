import "../sass/friend.scss";
import tplHeader from "../component/header.html";
import tplFooter from "../component/footer.html";
import tplNavbar from "../component/navbar.html";
import {$, $$} from "./query";
import {circleWidth, circleHeight} from "./circle";
import lineHeight from "./lineheight";
var header = $("#header");
var footer = $("#footer");
var navBar = $("#navBar");
header.innerHTML = tplHeader;
footer.innerHTML = tplFooter;
navBar.innerHTML = tplNavbar;
circleHeight($$(".circle"), $("#circle-wrap"));
lineHeight($$(".friend-msg"), $(".friend-msg"));
lineHeight($$(".send-msg"), $(".send-msg"));