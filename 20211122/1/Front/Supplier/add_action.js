import { page_gren, pagestr } from "./edit_page.js";
import { SupplierInfo } from "./infoPage.js";

function onlynumber(id) {
    $(`#${id}`).bind('input', function (e) {
        let idData = $(`#${id}`).val();
        idData = idData.replace(/[^\d]/g, '');
        $(`#${id}`).val(idData);
    });
}

function addAction() {
    page_gren('新增');
    $("#result").html(pagestr);

    onlynumber("Phone");


    $("#addpg").click(function (e) {
        let data = {
            Name: $("#Name").val(),
            ContactPerson: $("#ContactPerson").val(),
            Phone: $("#Phone").val(),
            Address: $("#Address").val(),
        }

        axios.post('http://localhost/20211115/1/Back/index.php?action=newSupplier', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let resultmsg = `status:${d['status']} message:${d['message']}`;
                $("#result").html(SupplierInfo());
                alert(resultmsg);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { addAction }