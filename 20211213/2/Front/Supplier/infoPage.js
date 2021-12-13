import { addAction } from "./add_action.js";
import { editpage } from "./update_action.js";
import {delAction} from "./del_action.js"

export function SupplierInfo() {
    let InfoPageStr = ''
    axios.get("http://localhost/20211129/1/Back/public/index.php?action=getSuppliers")
        .then(res => {
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    InfoPageStr = `<table border='1'>`;
                    InfoPageStr += `<tr><td>編號</td><td>名稱</td><td>聯絡人</td><td>電話</td><td>住址</td><td><button id='add'>新增</button></td></tr>`;
                    data.forEach(element => {
                        InfoPageStr += "<tr>";
                        InfoPageStr += `<td >` + element['Id'] + "</td>";
                        InfoPageStr += `<td >` + element['Name'] + "</td>";
                        InfoPageStr += "<td>" + element['ContactPerson'] + "</td>";
                        InfoPageStr += "<td>" + element['Phone'] + "</td>";
                        InfoPageStr += "<td>" + element['Address'] + "</td>";
                        InfoPageStr += `<td><button id=${element['Id']} class='updateUser'>修改</button><button id=${element['Id']} class='deleteUser'>刪除</button></td>`;
                    });
                    InfoPageStr += "</table>";
                    $("#result").html(InfoPageStr);
                    actions();
                    break;
                default:
                    $("#result").html(res['message']);
                    break;
            }
        })
        .catch(err => {
            console.error(err);
        })
}

function actions() {
    $("#add").click(function (e) { 
        addAction();
    });

    $(".updateUser").click(function (e) {
        let id = this.id
        editpage(id);
    });

    $(".deleteUser").click(function (e) {
        let id = this.id
        delAction(id);
    });
    
}