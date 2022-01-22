import { ClassInfo } from "./infoPage.js";
import Request from '../CustomLibs/Request.js';

export function delAction(id,teacherid) {
    Request().post('index.php?action=removeClassData', Qs.stringify({ Cid: id }))
        .then(res => {
            let d = res['data'];
            let resultmsg = `status:${d['status']} message:${d['message']}`;
            alert(resultmsg)
            $("#result").html(ClassInfo(teacherid));
        })
        .catch(err => {
            console.error(err);
        })
}