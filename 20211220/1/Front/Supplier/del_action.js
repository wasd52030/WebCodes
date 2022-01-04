import { SupplierInfo } from "./infoPage.js";
import Request from '../CustomLibs/Request.js';

export function delAction(id) {
    Request().post('http://localhost/20211220/1/Back/public/index.php?action=removeSupplier', Qs.stringify({ Id: id }))
        .then(res => {
            let d = res['data'];
            let resultmsg = `status:${d['status']} message:${d['message']}`;
            alert(resultmsg)
            $("#result").html(SupplierInfo());
        })
        .catch(err => {
            console.error(err);
        })
}