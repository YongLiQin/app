import "../sass/friend.scss";
import tplHeader from "../component/header.html";
import tplFooter from "../component/footer.html";
import tplNavbar from "../component/navbar.html";
import $ from "./query";
import {circleWidth, circleHeight} from "./circle";
import lineHeight from "./lineheight";
let header = $("#header")[0];
let footer = $("#footer")[0];
let navBar = $("#navBar")[0];
header.innerHTML = tplHeader;
footer.innerHTML = tplFooter;
navBar.innerHTML = tplNavbar;
circleHeight($(".circle"), $("#circle-wrap")[0]);
lineHeight($(".friend-msg"), $(".friend-msg")[0]);
lineHeight($(".send-msg"), $(".send-msg")[0]);
