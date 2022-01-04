import { page_gren, pagestr } from './edit_page.js';
import { EmployeeInfo } from "./infoPage.js";
import { NumberLimitById } from "../CustomLibs/NumberLimit.js";
import Request from '../CustomLibs/Request.js';

export function editpage(id) {
    Request().post('index.php?action=getUsers', Qs.stringify({ id: id }))
        .then(res => {
            let data = res['data']['result'];
            page_gren('update data', data[0]['id'], data[0]['name'], data['0']["pwd"], data['0']["EntryDate"], data['0']["address"], data['0']["email"], data['0']["phone"]);
            $("#result").html(pagestr);
            NumberLimitById("phone");
            UpdateAction();
        })
        .catch(err => {
            console.error(err);
        })
}

function UpdateAction() {

    $("#Update").click(function (e) {
        let data = {
            id: $("#id").val(),
            name: $("#name").val(),
            pwd: $("#pwd").val(),
            EntryDate: $("#EntryDate").val(),
            address: $("#address").val(),
            email: $("#email").val(),
            phone: $("#phone").val()
        }

        Request().post('index.php?action=updateUser', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let updateresult = `status:${d['status']} message:${d['message']}`;
                alert(updateresult);
                $("#result").html(EmployeeInfo());
            })
            .catch(err => {
                console.error(err);
            })
    });
}