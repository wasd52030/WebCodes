import { ProdInfo } from "./infoPage.js";

export function delAction(id) {
    axios.post('http://localhost/20211220/1/Back/public/index.php?action=removeProduct', Qs.stringify({ id: id }))
        .then(res => {
            let d = res['data'];
            let resultmsg = `status:${d['status']} message:${d['message']}`;
            alert(resultmsg)
            $("#result").html(ProdInfo());
        })
        .catch(err => {
            console.error(err);
        })
}