import { page_gren, pagestr } from "./edit_page.js";
import { ProdInfo } from "./infoPage.js";

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

    onlynumber("cost");
    onlynumber("price");
    onlynumber("count");


    $("#addpg").click(function (e) {
        let data = {
            id: $("#id").val(),
            name: $("#name").val(),
            cost: $("#cost").val(),
            price: $("#price").val(),
            count: $("#count").val(),
        }

        axios.post('http://localhost/20211122/2/Back/index.php?action=newProduct', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let resultmsg = `status:${d['status']} message:${d['message']}`;
                $("#result").html(ProdInfo());
                alert(resultmsg);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { addAction }