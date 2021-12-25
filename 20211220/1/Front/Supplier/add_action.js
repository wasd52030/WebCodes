import { page_gren, pagestr } from "./edit_page.js";
import { SupplierInfo } from "./infoPage.js";
import { NumberLimitById } from "../CustomLibs/NumberLimit.js";

function addAction() {
    page_gren('新增');
    $("#result").html(pagestr);

    NumberLimitById("Phone");


    $("#addpg").click(function (e) {
        let data = {
            Name: $("#Name").val(),
            ContactPerson: $("#ContactPerson").val(),
            Phone: $("#Phone").val(),
            Address: $("#Address").val(),
        }

        axios.post('http://localhost/20211220/1/Back/public/index.php?action=newSupplier', Qs.stringify(data))
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