import { Mainpage } from "./main_page.js";
import { EmployeeInfo } from "./Employee/infoPage.js"
import { ProdInfo } from "./Product/infoPage.js"
import { CharacterInfo } from "./Character/infoPage.js";
import { SupplierInfo } from "./Supplier/infoPage.js"


$(document).ready(function () {

    $("#main").html(Mainpage());

    $("#employee").click(function (e) {
        EmployeeInfo();
    });

    $("#product").click(function (e) {
        ProdInfo();
    });

    $("#Character").click(function (e) {
        CharacterInfo();
    });

    $("#Supplier").click(function (e) {
        SupplierInfo();
    });
});