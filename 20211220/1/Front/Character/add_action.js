import { page_gren, pagestr } from "./edit_page.js";
import { CharacterInfo } from "./infoPage.js";


function addAction() {
    page_gren('新增');
    $("#result").html(pagestr);


    $("#addpg").click(function (e) {
        let data = {
            name: $("#name").val(),
        }

        axios.post('http://localhost/20211220/1/Back/public/index.php?action=newCharacter', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let resultmsg = `status:${d['status']} message:${d['message']}`;
                $("#result").html(CharacterInfo());
                alert(resultmsg);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { addAction }