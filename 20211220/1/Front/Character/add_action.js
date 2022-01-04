import { page_gren, pagestr } from "./edit_page.js";
import { CharacterInfo } from "./infoPage.js";
import Request from '../CustomLibs/Request.js';


function addAction() {
    page_gren('新增');
    $("#result").html(pagestr);


    $("#addpg").click(function (e) {
        let data = {
            name: $("#name").val(),
        }

        
        Request().post('index.php?action=newCharacter', Qs.stringify(data))
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