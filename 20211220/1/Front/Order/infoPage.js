import { newOrder } from "./new_order.js"

export function OrderInfo() {
    axios.get("http://localhost/20211220/1/Back/public/index.php?action=getOrders")
        .then(res => {
            let response = res['data'];
            switch (response['status']) {
                case 200:
                    const rows = response['result'];
                    let str = '<table>';
                    str += "<tr><td>編號</td><td>訂購者</td><td>時間</td><td><button id='newOrder'>新訂單</button></td></tr>"
                    rows.forEach(element => {
                        str += "<tr>";
                        str += "<td id='id'>" + element['id'] + "</td>";
                        str += "<td>" + element['user_id'] + "</td>";
                        str += "<td>" + element['date'] + "</td>";
                        str += "<td><button id='updateUser'>修改</button><button id='deleteUser'>刪除</button></td>";
                        str += "</tr>";
                    });
                    str += '</table>';
                    console.log(str)
                    $("#result").html(str);

                    $("#newOrder").click(function (e) {
                        newOrder(); 
                    });

                    break;
                default:
                    
                    $("#result").html(response['message']);
                    break;
            }
        })
        .catch(err => {
            console.error(err);
        })
}