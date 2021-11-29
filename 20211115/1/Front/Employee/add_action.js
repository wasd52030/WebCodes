import { page_gren, pagestr } from "./edit_page.js";
import { EmployeeInfo } from "./infoPage.js";
function addAction() {
    page_gren('新增');
    $("#result").html(pagestr);

    $("#phone").bind('input', function (e) {
        let idData = $("#phone").val();
        idData = idData.replace(/[^\d]/g, '');
        $("#phone").val(idData);
    });

    $("#addpg").click(function (e) {
        let data = {
            id: $("#id").val(),
            name: $("#name").val(),
            pwd: $("#pwd").val(),
            EntryDate: $("#EntryDate").val(),
            address: $("#address").val(),
            email: $("#email").val(),
            phone: $("#phone").val()
        }

        axios.post('http://localhost/20211115/1/Back/index.php?action=newUser', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let resultmsg = `status:${d['status']} message:${d['message']}`;
                $("#result").html(EmployeeInfo());
                alert(resultmsg);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { addAction }