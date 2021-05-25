import { updateAction } from "./update_pate.js";
import { delAction } from "./del_page.js";

let searchpagestr = ''
function serachpage(id, btntext) {

    console.log(id,btntext)

    axios.get("/SQLDemo/Back/Select.php")
        .then(res => {
            let ResultData = res;
            switch (ResultData['status']) {
                case 200:
                    let data = ResultData['data']['result']
                    searchpagestr = `<table border='1'>`;
                    searchpagestr += "<tr><td></td><td>name</td><td>address</td><td>birthday</td></tr>"
                    data.forEach(element => {
                        searchpagestr += "<tr>";
                        //radio button 的name參數用來告訴瀏覽器同名的選項為一組，使得radio button一組資料只能取一的特性啟動
                        //radio button 的value參數通常會傳回後端處理
                        searchpagestr += `<td><input id="id" name="id" type="radio" value="` + element['id'] + `"></td>`;
                        searchpagestr += "<td>" + element['name'] + "</td>";
                        searchpagestr += "<td>" + element['addr'] + "</td>";
                        //把伺服器傳回來的時間字串轉成javascript的日期物件，方便取所需的值
                        let d = new Date(element['birth']);
                        //dateObject.getMonth() => dateObject 的月份字段，傳回值是 0（一月）到 11（十二月） 之間的一个整数。
                        let fullmonth = (d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
                        let fulldate = (d.getDate()) < 10 ? `0${d.getDate()}` : d.getDate();
                        searchpagestr += "<td>" + `${d.getFullYear()}/${fullmonth}/${fulldate}` + "</td>";
                        searchpagestr += "</tr>";
                    });
                    searchpagestr += "</table>";
                    if (id === 'Usel') {
                        searchpagestr += `<button id="${id}" style="margin: 5px 0 0 0;">${btntext}</button>`;
                        $("#result").html(searchpagestr);
                        updateAction();
                    } else if (id === 'Del') {
                        searchpagestr += `<button id="${id}" style="margin: 5px 0 0 0;">${btntext}</button>`;
                        $("#result").html(searchpagestr);
                        delAction();
                    }
                    break;
                default:
                    $("#result").html(ResultData['message']);
                    break;
            }
        })
        .catch(err => {
            console.error(err);
        })
}

export { serachpage }