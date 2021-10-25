import { page_gren, pagestr } from './edit_page.js'

let id = 0;
function updateAction() {
    $("#Usel").click(function (e) {
        axios.post('http://localhost/20211025/2/Back/index.php?action=getUsers', Qs.stringify({ id: $("input[id='id']:checked").val() }))
            .then(res => {
                let data = res['data']['result'];
                page_gren('update data', data[0]['id'], data['0'].pwd, data['0'].email, data['0'].phone);
                $("#result").html(pagestr);
                editpage();
            })
            .catch(err => {
                console.error(err);
            })
    });
}

function editpage() {

    $("#Update").click(function (e) {
        let data = {
            id: $("#id").val(),
            pwd: $("#pwd").val(),
            email: $("#email").val(),
            phone: $("#phone").val()
        }

        axios.post('http://localhost/20211025/2/Back/index.php?action=updateUser', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let updateresult = `status:${d['status']} message:${d['message']}`;
                $("#result").html(updateresult);
            })
            .catch(err => {
                console.error(err);
            })
    });
}


export { updateAction }