export function showOrderList() {
    const data = {
        "order_id": $("#order_id").text(),
    };
    axios.post("http://localhost/test/backend/public/index.php?action=getOrderlist", Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            switch (response['status']) {
                case 200:
                    const rows = response['result'];
                    let str = '<table>';
                    str += "<tr><td>編號</td><td>產品編號</td><td>產品名稱</td><td>數量</td><td>價格</td><td></td></tr>"
                    rows.forEach(element => {
                        str += "<tr>";
                        str += "<td>" + element['id'] + "</td>";
                        str += "<td>" + element['product_id'] + "</td>";
                        str += "<td>" + element['product_name'] + "</td>";
                        str += "<td>" + element['num'] + "</td>";
                        str += "<td>" + element['price'] + "</td>";
                        str += "<td><button id='deleteUser'>刪除</button></td>";
                        str += "</tr>";
                    });
                    str += '</table>';
                    $("#order_content").html(str);
                    break;
                default:
                    $("#order_content").html(response['message']);
                    break;
            }
        })
        .catch(err => {
            console.error(err);
        })
}
