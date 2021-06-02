import { page_gren, pagestr } from "./edit_page.js";
function addAction() {
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
            url: "/20210601/1/Back/Insert.php",
            data: data,
            success: function (response) {
                let res = JSON.parse(response);
                let delresult = `status:${res['status']} message:${res['message']}`;
                $("#result").html(delresult);
            },
            error: function (err) {
                console.log(err)
            }
        });
    });
}

export { addAction }