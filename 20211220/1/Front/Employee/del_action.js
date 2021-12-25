import { EmployeeInfo } from "./infoPage.js"

export function delAction(id) {
    axios.post('http://localhost/20211220/1/Back/public/index.php?action=removeUser', Qs.stringify({ id: id }))
        .then(res => {
            let d = res['data'];
            let resultmsg = `status:${d['status']} message:${d['message']}`;
            alert(resultmsg);
            $("#result").html(EmployeeInfo());
        })
        .catch(err => {
            console.error(err);
        })
}