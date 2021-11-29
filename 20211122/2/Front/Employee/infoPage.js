import { addAction } from "./add_action.js";
import { editpage } from "./update_action.js";
import {delAction} from "./del_action.js"

export function EmployeeInfo() {
    let InfoPageStr = ''
    axios.get("http://localhost/20211122/2/Back/index.php?action=getUsers")
        .then(res => {
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    InfoPageStr = `<table border='1'>`;
                    InfoPageStr += `<tr><td>員工編號</td><td>姓名</td><td>密碼</td><td>入職日期</td><td>住址</td><td>email</td><td>電話</td><td><button id='add'>新增使用者</button></td></tr>`;
                    data.forEach(element => {
                        InfoPageStr += "<tr>";
                        InfoPageStr += `<td >` + element['id'] + "</td>";
                        InfoPageStr += `<td >` + element['name'] + "</td>";
                        InfoPageStr += "<td>" + element['pwd'] + "</td>";
                        InfoPageStr += "<td>" + element['EntryDate'].replaceAll("-","/") + "</td>";
                        InfoPageStr += "<td>" + element['address'] + "</td>";
                        InfoPageStr += "<td>" + element['email'] + "</td>";
                        InfoPageStr += "<td>" + element['phone'] + "</td>";
                        InfoPageStr += `<td><button id=${element['id']} class='updateUser'>修改</button><button id=${element['id']} class='deleteUser'>刪除</button></td>`;
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