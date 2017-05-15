import "../sass/group.scss";
import tplHeader from "../component/header.html";
import tplFooter from "../component/footer.html";
import tplNavbar from "../component/navbar.html";
import $ from "./query";
let header = $("#header")[0];
let footer = $("#footer")[0];
let navBar = $("#navBar")[0];
header.innerHTML = tplHeader;
footer.innerHTML = tplFooter;
navBar.innerHTML = tplNavbar;

