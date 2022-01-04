import { page_gren, pagestr } from "./edit_page.js";
import { ProdInfo } from "./infoPage.js";
import { NumberLimitById } from "../CustomLibs/NumberLimit.js";
import Request from '../CustomLibs/Request.js';



function addAction() {
    page_gren('新增');
    $("#result").html(pagestr);

    NumberLimitById("cost");
    NumberLimitById("price");
    NumberLimitById("count");


    $("#addpg").click(function (e) {
        let data = {
            id: $("#id").val(),
            name: $("#name").val(),
            cost: $("#cost").val(),
            price: $("#price").val(),
            count: $("#count").val(),
        }

        Request().post('index.php?action=newProduct', Qs.stringify(data))
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