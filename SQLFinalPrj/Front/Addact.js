import { page_gren, pagestr } from "./EditPage.js";

function addAction() {
    page_gren("新增股票");
    $("#result").html(pagestr);

    $("#addpg").click(function (e) {
        let data = {
            id: $("#id").val(),
            name: $("#name").val(),
            price: $("#price").val(),
            mk_price: $("#mk_price").val()
        }

        $.ajax({
            type: "POST",
            url: "http://localhost/SQLFinalPrj/Back/index.php?action=Insert",
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