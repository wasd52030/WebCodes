import { CharacterInfo } from "./infoPage.js";

export function delAction(id) {
    axios.post('http://localhost/20211115/1/Back/index.php?action=removeCharacter', Qs.stringify({ id: id }))
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