import { Info } from "./infoPage.js"

export function delAction(id) {
    axios.post('http://localhost/20211025/3/Back/index.php?action=removeUser', Qs.stringify({ id: id }))
        .then(res => {
            let d = res['data'];
            let resultmsg = `status:${d['status']} message:${d['message']}`;
            $("#result").html(Info());
        })
        .catch(err => {
            console.error(err);
        })
}