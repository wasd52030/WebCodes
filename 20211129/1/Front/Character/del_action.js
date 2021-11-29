import { CharacterInfo } from "./infoPage.js";

export function delAction(id) {
    axios.post('http://localhost/20211129/1/Back/public/index.php?action=removeCharacter', Qs.stringify({ id: id }))
        .then(res => {
            let d = res['data'];
            let resultmsg = `status:${d['status']} message:${d['message']}`;
            alert(resultmsg)
            $("#result").html(CharacterInfo());
        })
        .catch(err => {
            console.error(err);
        })
}