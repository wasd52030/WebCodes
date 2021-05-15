import { page_gren, pagestr } from "./edit_page.js";
import { mainpage } from "./main_page.js";
import { select_page } from "./del_page.js";
import { sel_page } from "./sel_page.js";
import { updatepage } from "./update_pate.js";

$(document).ready(function () {

    $("#main").html(mainpage);

    $("#sel").click(function (e) {
        $("#result").html(sel_page);
    });

    $("#add").click(function (e) {

        page_gren('add data');
        $("#result").html(pagestr);

        //限制user只能輸入數字
        $("#id").bind('input', function (e) {
            let idData = $("#id").val();
            idData = idData.replace(/[^\d]/g, '');
            $("#id").val(idData);
        });

        $("#addpg").click(function (e) {
            let data = {
                id: $("#id").val(),
                name: $("#name").val(),
                address: $("#address").val(),
                birthday: $("#birthday").val()
            }

            $.ajax({
                type: "POST",
                url: "/SQLDemo/Back/Insert.php",
                data: data,
                success: function (response) {
                    let res = JSON.parse(response);
                    let delresult = `status:${res['status']} message:${res['message']}`;
                    $("#result").html(delresult);
                },
                error:function (err) {
                    console.log(err)
                }
            });
        });
    });

    $("#del").click(function (e) {
        select_page();
    });

    $("#edit").click(function (e) {
        updatepage();
    });
});