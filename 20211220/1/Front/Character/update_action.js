import { page_gren, pagestr } from './edit_page.js'
import { CharacterInfo } from "./infoPage.js";

export function editpage(id) {
    axios.post('http://localhost/20211220/1/Back/public/index.php?action=getCharacters', Qs.stringify({ id: id }))
        .then(res => {
            let data = res['data']['result'];
            page_gren('update data', data[0]['id'], data[0]['name']);
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
        }

        axios.post('http://localhost/20211220/1/Back/public/index.php?action=updateCharacter', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let updateresult = `status:${d['status']} message:${d['message']}`;
                alert(updateresult);
                $("#result").html(CharacterInfo());
            })
            .catch(err => {
                console.error(err);
            })
    });
}