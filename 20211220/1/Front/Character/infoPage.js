import { addAction } from "./add_action.js";
import { editpage } from "./update_action.js";
import { delAction } from "./del_action.js";
import Request from '../CustomLibs/Request.js';

export function CharacterInfo() {
    let InfoPageStr = ''
    Request().get("index.php?action=getCharacters")
        .then(res => {
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    InfoPageStr = `<table border='1'>`;
                    InfoPageStr += `<tr><td>編號</td><td>名稱</td><td><button id='add'>新增</button></td></tr>`;
                    data.forEach(element => {
                        InfoPageStr += "<tr>";
                        InfoPageStr += `<td >` + element['id'] + "</td>";
                        InfoPageStr += `<td >` + element['name'] + "</td>";
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
        let id = this.id;
        editpage(id);
    });

    $(".deleteUser").click(function (e) {
        let id = this.id;
        delAction(id);
    });

}