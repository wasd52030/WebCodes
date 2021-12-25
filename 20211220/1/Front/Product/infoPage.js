import { addAction } from "./add_action.js";
import { editpage } from "./update_action.js";
import {delAction} from "./del_action.js"

export function ProdInfo() {
    let InfoPageStr = ''
    axios.get("http://localhost/20211220/1/Back/public/index.php?action=getProducts")
        .then(res => {
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    InfoPageStr = `<table border='1'>`;
                    InfoPageStr += `<tr><td>產品編號</td><td>產品名稱</td><td>成本</td><td>售價</td><td>數量</td><td><button id='add'>新增產品</button></td></tr>`;
                    data.forEach(element => {
                        InfoPageStr += "<tr>";
                        InfoPageStr += `<td >` + element['id'] + "</td>";
                        InfoPageStr += `<td >` + element['name'] + "</td>";
                        InfoPageStr += "<td>" + element['cost'] + "</td>";
                        InfoPageStr += "<td>" + element['price'] + "</td>";
                        InfoPageStr += "<td>" + element['count'] + "</td>";
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
        console.log(id)
        editpage(id);
    });

    $(".deleteUser").click(function (e) {
        let id = this.id
        delAction(id);
    });
    
}