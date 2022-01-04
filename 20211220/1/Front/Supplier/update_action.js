import { page_gren, pagestr } from './edit_page.js'
import { SupplierInfo } from "./infoPage.js";
import Request from '../CustomLibs/Request.js';

export function editpage(id) {
    Request().post('index.php?action=getSuppliers', Qs.stringify({ id: id }))
        .then(res => {
            console.log(res)
            let data = res['data']['result'];
            page_gren('update data', data[0]['Id'], data[0]['Name'], data['0']["ContactPerson"], data['0']["Phone"], data['0']["Address"]);
            $("#result").html(pagestr);
            UpdateAction();
        })
        .catch(err => {
            console.error(err);
        })
}

function UpdateAction() {

    $("#Update").click(function (e) {
        let data = {
            Id: $("#Id").val(),
            Name: $("#Name").val(),
            ContactPerson: $("#ContactPerson").val(),
            Phone: $("#Phone").val(),
            Address: $("#Address").val(),
        }

        Request().post('index.php?action=updateSupplier', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let updateresult = `status:${d['status']} message:${d['message']}`;
                alert(updateresult);
                $("#result").html(SupplierInfo());
            })
            .catch(err => {
                console.error(err);
            })
    });
}