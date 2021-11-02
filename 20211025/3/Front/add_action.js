import { page_gren, pagestr } from "./edit_page.js";
import { Info } from "./infoPage.js";
function addAction() {
    page_gren('新增');
    $("#result").html(pagestr);

    $("#addpg").click(function (e) {
        let data = {
            id: $("#id").val(),
            pwd: $("#pwd").val(),
            email: $("#email").val(),
            phone: $("#phone").val()
        }

        axios.post('http://localhost/20211025/3/Back/index.php?action=newUser', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let resultmsg = `status:${d['status']} message:${d['message']}`;
                $("#result").html(Info());
                alert(resultmsg);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { addAction }