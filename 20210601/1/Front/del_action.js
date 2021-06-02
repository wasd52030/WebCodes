function delAction() {
    $("#Del").click(function (e) {
        $.ajax({
            type: "POST",
            url: "/20210601/1/Back/Delete.php",
            data: { id: $("input[id='id']:checked").val() },
            success: function (response) {
                let res = JSON.parse(response);
                let delresult = `status:${res['status']} message:${res['message']}`;
                $("#result").html(delresult);
            }
        });
    });
}

export { delAction }