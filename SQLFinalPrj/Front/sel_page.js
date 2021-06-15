function sel_page()
{
    let searchpagestr = ''
    axios.get("http://localhost/SQLFinalPrj/Back/index.php?action=Select")
        .then(res => {
            console.log(res)
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    searchpagestr = `<table border='1'>`;
                    searchpagestr += "<tr><td></td><td>公司名稱</td><td>開盤價格</td><td>總成交額(百萬)</td></tr>"
                    data.forEach(element => {
                        searchpagestr += "<tr>";
                        //radio button 的name參數用來告訴瀏覽器同名的選項為一組，使得radio button一組資料只能取一的特性啟動
                        //radio button 的value參數通常會傳回後端處理
                        searchpagestr += "<td>" + element['id'] + "</td>";
                        searchpagestr += "<td>" + element['name'] + "</td>";
                        searchpagestr += "<td>" + element['price'] + "</td>";
                        searchpagestr += "<td>" + element['mk_price'] + "</td>";
                        searchpagestr += "</tr>";
                    });
                    searchpagestr += "</table>";
                    $("#result").html(searchpagestr);
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

export {sel_page};