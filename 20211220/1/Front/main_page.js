import { EmployeeInfo } from "./Employee/infoPage.js"
import { ProdInfo } from "./Product/infoPage.js"
import { CharacterInfo } from "./Character/infoPage.js"
import { SupplierInfo } from "./Supplier/infoPage.js"

export function Mainpage () {
    
    let page=`
        <button id="employee">員工資料</button>
        <button id="product">產品資料</button>
        <button id="Character">角色</button>
        <button id="Supplier">供應商</button>
        <div id="content"></div>
    `

    $("#main").html(page);

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
}