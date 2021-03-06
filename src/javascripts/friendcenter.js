import "../sass/friendcenter.scss";
import tplHeader from "../component/header.html";
import tplFooter from "../component/footer.html";
import tplSearch from "../component/search.html";
import $ from "./query";
import {toCircle, toCircleEvery} from "./circle";
import {circleWidth, circleHeight} from "./circle";
import lineHeight from "./lineheight";
let header = $("#header")[0];
let footer = $("#footer")[0];
let search = $("#search")[0];
header.innerHTML = tplHeader;
footer.innerHTML = tplFooter;
search.innerHTML = tplSearch;
circleWidth($(".circle"), $("#circle-wrap")[0]);
lineHeight($(".average-group"), $(".average-group")[0]);
lineHeight($(".msg-group"), $(".msg-group")[0]);
