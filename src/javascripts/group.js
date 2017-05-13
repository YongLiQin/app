import "../sass/group.scss";
import tplHeader from "../component/header.html";
import tplFooter from "../component/footer.html";
import tplNavbar from "../component/navbar.html";
import {$, $$} from "./query";
var header = $("#header");
var footer = $("#footer");
var navBar = $("#navBar");
header.innerHTML = tplHeader;
footer.innerHTML = tplFooter;
navBar.innerHTML = tplNavbar;

