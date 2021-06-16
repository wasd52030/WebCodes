import { orderpage } from "./OrderPage.js";

function sel_page() {
    let searchpagestr = ''
    axios.get("http://localhost/SQLFinalPrj/Back/index.php?action=Select")
        .then(res => {
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    searchpagestr = `<table border='1' id="seltb">`;
                    searchpagestr += "<tr><td>股票代號</td><td>公司名稱</td><td>開盤價格</td><td>總成交額(百萬)</td></tr>"
                    data.forEach(element => {
                        searchpagestr += "<tr>";
                        //radio button 的name參數用來告訴瀏覽器同名的選項為一組，使得radio button一組資料只能取一的特性啟動
                        //radio button 的value參數通常會傳回後端處理
                        searchpagestr += "<td>" + element['id'] + "</td>";
                        searchpagestr += "<td>" + element['name'] + "</td>";
                        searchpagestr += "<td>" + element['price'] + "</td>";
                        searchpagestr += "<td>" + element['mk_price'] + "</td>";
                        searchpagestr += `<td><button class="order" id=${element['id']}>購買</button></td>`;
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
                orderpage(d[0]["id"], d[0]["name"], d[0]["price"], d[0]['ordercnt']);
                OrderAction(d[0]["id"], d[0]['ordercnt']);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

function OrderAction(id, ordercnt) {
    $("#ALRODR").click(function (e) {
        ordercnt = $("#price").val();
        let data = {
            id: id,
            ordercnt: ordercnt
        }
        axios.post("http://localhost/SQLFinalPrj/Back/index.php?action=Update", Qs.stringify(data))
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

export { sel_page };