import { mainpage } from "./main_page.js";
import { addAction } from "./add_action.js";
import { sel_page } from "./sel_page.js";
import {serachpage} from "./serachlist.js";


$(document).ready(function () {

    $("#main").html(mainpage);

    $("#sel").click(function (e) {
        $("#result").html(sel_page);
    });

    $("#add").click(function (e) {
        addAction();
    });

    $("#del").click(function (e) {
        serachpage("Del", "delete data");
    });

    $("#update").click(function (e) {
        serachpage('Usel', 'edit data');
    });
});