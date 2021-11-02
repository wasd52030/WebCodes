import {Mainpage} from "./main_page.js";
import {Info} from "./infoPage.js"


$(document).ready(function () {

    $("#main").html(Mainpage());

    $("#employee").click(function (e) { 
        Info();
    });
});