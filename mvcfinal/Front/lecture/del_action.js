import { lectureInfo } from "./infoPage.js";
import Request from '../CustomLibs/Request.js';

export function delAction(id,teacherid) {
    Request().post('index.php?action=removelecture', Qs.stringify({ id: id }))
        .then(res => {
            let d = res['data'];
            let resultmsg = `status:${d['status']} message:${d['message']}`;
            alert(resultmsg)
            $("#result").html(lectureInfo(teacherid));
        })
        .catch(err => {
            console.error(err);
        })
}