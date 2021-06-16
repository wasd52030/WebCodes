import { mainpage } from "./MainPage.js";
import { addAction } from "./Addact.js";
import { sel_page } from "./SelOdrPage.js";
import { serachpage } from "./SearchLisr.js";


$(document).ready(function () {

    $("#main").html(mainpage);

    $("#sel").click(function (e) {
        sel_page();
    });

    $("#add").click(function (e) {
        addAction();
    });

    $("#del").click(function (e) {
        serachpage("Del", "刪除股票");
    });

    $("#update").click(function (e) {
        serachpage("Usel", "修改股票資訊");
    });
});