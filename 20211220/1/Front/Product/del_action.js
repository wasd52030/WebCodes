import { ProdInfo } from "./infoPage.js";
import Request from '../CustomLibs/Request.js';

export function delAction(id) {
    Request().post('index.php?action=removeProduct', Qs.stringify({ id: id }))
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