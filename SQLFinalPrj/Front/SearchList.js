import { updateAction } from "./UpdateAct.js";
import { delAction } from "./Delact.js";

let SearchPageStr = ''
function serachpage(id, btntext) {

    axios.get("http://localhost/SQLFinalPrj/Back/index.php?action=Select")
        .then(res => {
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    SearchPageStr = `<table border='1' id="seltb">`;
                    SearchPageStr += "<tr><td></td><td>公司名稱</td><td>開盤價格(每股)</td><td>市值(億元)</td></tr>"
                    data.forEach(element => {
                        SearchPageStr += "<tr>";
                        //radio button 的name參數用來告訴瀏覽器同名的選項為一組，使得radio button一組資料只能取一的特性啟動
                        //radio button 的value參數通常會傳回後端處理
                        SearchPageStr += `<td><input id="id" name="id" type="radio" value="` + element['id'] + `"></td>`;
                        SearchPageStr += "<td>" + element['name'] + "</td>";
                        SearchPageStr += "<td>" + element['price'] + "</td>";
                        SearchPageStr += "<td>" + element['mk_price'] + "</td>";
                        SearchPageStr += "</tr>";
                    });
                    SearchPageStr += "</table>";
                    if (id === 'Usel') {
                        SearchPageStr += `<button id="${id}" style="margin: 5px 0 0 0;">${btntext}</button>`;
                        $("#result").html(SearchPageStr);
                        updateAction();
                    } else if (id === 'Del') {
                        SearchPageStr += `<button id="${id}" style="margin: 5px 0 0 0;">${btntext}</button>`;
                        $("#result").html(SearchPageStr);
                        delAction();
                    }
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

export { serachpage }