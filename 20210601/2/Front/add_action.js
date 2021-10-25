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

        axios.post('http://localhost/20210601/2/Back/index.php?action=Insert', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let resultmsg = `status:${d['status']} message:${d['message']}`;
                $("#result").html(resultmsg);
            })
            .catch(err => {
                console.error(err);
            })


    });
}

export { addAction }