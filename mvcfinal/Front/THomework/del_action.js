import { THomeworkInfo } from "./infoPage.js";
import Request from '../CustomLibs/Request.js';

export function delAction(id,teacherid) {
    Request().post('index.php?action=removeClasshomework', Qs.stringify({ id: id }))
        .then(res => {
            let d = res['data'];
            let resultmsg = `status:${d['status']} message:${d['message']}`;
            alert(resultmsg)
            $("#result").html(THomeworkInfo(teacherid));
        })
        .catch(err => {
            console.error(err);
        })
}