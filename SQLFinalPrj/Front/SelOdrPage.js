import { orderpage } from "./OrderPage.js";

function sel_page() {
    let searchpagestr = ''
    axios.get("http://localhost/SQLFinalPrj/Back/index.php?action=Select")
        .then(res => {
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    searchpagestr = `<table border='1' id="seltb">`;
                    searchpagestr +=`<tr><td colspan = "4" style="text-align:center;">已購買的股票請到管理購入項目操作</td></tr>`;
                    searchpagestr += "<tr><td>股票代號</td><td>公司名稱</td><td>開盤價格(每股)</td><td>市值(億元)</td></tr>"
                    data.forEach(element => {
                        searchpagestr += "<tr>";
                        searchpagestr += "<td>" + element['id'] + "</td>";
                        searchpagestr += "<td>" + element['name'] + "</td>";
                        searchpagestr += "<td>" + element['price'] + "</td>";
                        searchpagestr += "<td>" + element['mk_price'] + "</td>";
                        if (parseInt(element["ordercnt"] )> 0) {
                            searchpagestr += `<td><button class="order" disabled="disabled" id=${element['id']}>購買</button></td>`;
                        } else {
                            searchpagestr += `<td><button class="order" id=${element['id']}>購買</button></td>`;
                        }

                        searchpagestr += "</tr>";
                    });
                    searchpagestr += "</table>";
                    $("#result").html(searchpagestr);
                    order();
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

function order() {
    $(".order").click(function (e) {
        axios.post("http://localhost/SQLFinalPrj/Back/index.php?action=Select", Qs.stringify({ id: this.id }))
            .then(res => {
                let d = res["data"]["result"];
                orderpage(d[0]["id"], d[0]["name"], d[0]["price"], d[0]['ordercnt'],'buy');
                OrderAction(d[0]["id"], d[0]['ordercnt']);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

function OrderAction(id, ordercnt) {
    $("#ALRODR").click(function (e) {
        ordercnt = $("#buys").val();
        let data = {
            id: id,
            ordercnt: ordercnt
        }
        axios.post("http://localhost/SQLFinalPrj/Back/index.php?action=Update", Qs.stringify(data))
            .then(res => {
                alert("購買成功，將返回查詢畫面！");
                sel_page();
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { sel_page };