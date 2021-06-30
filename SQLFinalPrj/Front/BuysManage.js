import { orderpage } from "./OrderPage.js";

function buysManage() {
    let searchpagestr = ""
    let total = 0;
    axios.post("http://localhost/SQLFinalPrj/Back/index.php?action=Select", Qs.stringify({ buys: true }))
        .then(res => {
            switch (res["status"]) {
                case 200:
                    let data = res["data"]["result"]
                    if (data.length === 0) {
                        searchpagestr = `<h1>您尚未購買任何股票！</h1>`;
                    } else {
                        searchpagestr = `<table border="1" id="seltb">`;
                        searchpagestr += "<tr><td>股票代號</td><td>公司名稱</td><td>開盤價格(每股)</td><td>購買數量</td><td>總價格</td></tr>"
                        data.forEach(element => {
                            searchpagestr += "<tr>";
                            searchpagestr += "<td>" + element["id"] + "</td>";
                            searchpagestr += "<td>" + element["name"] + "</td>";
                            searchpagestr += "<td>" + element["price"] + "</td>";
                            searchpagestr += "<td>" + element["ordercnt"] + "</td>";
                            searchpagestr += `<td>${(parseFloat(element['price']) * parseFloat(element['ordercnt'])).toFixed(2)}</td>`;
                            searchpagestr += `<td><button id="${element["id"]}" class="changebuy">修改數量</button></td>`;
                            searchpagestr += `<td><button id="${element["id"]}" class="nobuy">取消購買</button></td>`;
                            searchpagestr += "</tr>";
                            total += parseFloat(element['price']) * parseFloat(element['ordercnt'])
                        });

                        searchpagestr += `<td colspan = "8" style="text-align:center;">帳戶中所有股票的總額：${total.toFixed(2)}</td>`;
                        searchpagestr += "</table>";
                    }
                    $("#result").html(searchpagestr);
                    ManageActions();
                    break;
                default:
                    $("#result").html(res["message"]);
                    break;
            }
        })
        .catch(err => {
            console.error(err);
        })
}

function ManageActions() {
    $(".changebuy").click(function (e) {
        axios.post("http://localhost/SQLFinalPrj/Back/index.php?action=Select", Qs.stringify({ id: this.id }))
            .then(res => {
                let d = res["data"]["result"];
                orderpage(d[0]["id"], d[0]["name"], d[0]["price"], d[0]['ordercnt']);
                Chorder(d[0]["id"], d[0]['ordercnt']);
            })
            .catch(err => {
            })
    });

    $(".nobuy").click(function (e) {
        let data = {
            id: this.id,
            ordercnt: 0
        }
        EditOrder(data);
    });
}

function Chorder(id, ordercnt) {
    $("#ALRODR").click(function (e) {
        ordercnt = $("#buys").val();
        let data = {
            id: id,
            ordercnt: ordercnt
        }
        EditOrder(data);
    });
}

function EditOrder(data) {
    axios.post("http://localhost/SQLFinalPrj/Back/index.php?action=Update", Qs.stringify(data))
        .then(res => {
            buysManage();
        })
        .catch(err => {
            console.error(err);
        })
}



export { buysManage }