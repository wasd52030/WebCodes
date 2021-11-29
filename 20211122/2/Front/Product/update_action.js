import { page_gren, pagestr } from './edit_page.js'
import { ProdInfo } from "./infoPage.js";

export function editpage(id) {
    axios.post('http://localhost/20211122/2/Back/index.php?action=getProducts', Qs.stringify({ id: id }))
        .then(res => {
            let data = res['data']['result'];
            page_gren('update data', data[0]['id'], data[0]['name'], data['0']["cost"], data['0']["price"], data['0']["count"]);
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
            id: $("#id").val(),
            name: $("#name").val(),
            cost: $("#cost").val(),
            price: $("#price").val(),
            count: $("#count").val(),
        }

        axios.post('http://localhost/20211122/2/Back/index.php?action=updateProduct', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let updateresult = `status:${d['status']} message:${d['message']}`;
                alert(updateresult);
                $("#result").html(ProdInfo());
            })
            .catch(err => {
                console.error(err);
            })
    });
}