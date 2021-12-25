import { page_gren, pagestr } from "./edit_page.js";
import { EmployeeInfo } from "./infoPage.js";
import {NumberLimitById} from "../CustomLibs/NumberLimit.js"

function addAction() {
    page_gren("新增");
    $("#result").html(pagestr);

    NumberLimitById("phone")

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

        axios.post("http://localhost/20211220/1/Back/public/index.php?action=newUser", Qs.stringify(data))
            .then(res => {
                let d = res["data"];
                let resultmsg = `status:${d["status"]} message:${d["message"]}`;
                $("#result").html(EmployeeInfo());
                alert(resultmsg);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { addAction }