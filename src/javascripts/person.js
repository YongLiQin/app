import "../sass/person.scss";
import tplHeader from "../component/header.html";
import tplFooter from "../component/footer.html";
import tplNavbar from "../component/navbar.html";
import lineHeight from "./lineheight";
import {$, $$} from "./query";
lineHeight($$(".detail-control-group"), $(".detail-control-group"));