import { page_gren, pagestr } from './edit_page.js'
let id = 0;
function updatepage() {
    $.ajax({
        type: "GET",
        url: "/sel",
        success: function (response) {
            let data = response['result'];
            let delpg = `<table border='1'>`;
            delpg += "<tr><td></td><td>name</td><td>address</td><td>birthday</td></tr>"
            data.forEach(element => {
                delpg += "<tr>";
                //radio button 的name參數用來告訴瀏覽器同名的選項為一組，使得radio button一組資料只能取一的特性啟動
                //radio button 的value參數通常會傳回後端處理
                delpg += `<td><input id="id" name="id" type="radio" value="` + element['id'] + `"></td>`;
                delpg += "<td>" + element['name'] + "</td>";
                delpg += "<td>" + element['addr'] + "</td>";
                //把伺服器傳回來的時間字串轉成javascript的日期物件，方便取所需的值
                let d = new Date(element['birth']);
                //dateObject.getMonth() => dateObject 的月份字段，傳回值是 0（一月）到 11（十二月） 之間的一个整数。
                let fullmonth = (d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
                let fulldate = (d.getDate()) < 10 ? `0${d.getDate()}` : d.getDate();
                delpg += "<td>" + `${d.getFullYear()}/${fullmonth}/${fulldate}` + "</td>";
                delpg += "</tr>";
            });
            delpg += "</table>";
            delpg += `<button id="seldata" style="margin: 5px 0 0 0;">edit data</button>`;
            $("#result").html(delpg);

            $("#seldata").click(function (e) {
                $.ajax({
                    type: "POST",
                    url: "/search",
                    data: { id: $("input[id='id']:checked").val() },
                    success: function (response) {
                        let data = response['data'];
                        let d = new Date(data['0'].birth);
                        let fullmonth = (d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
                        let fulldate = (d.getDate() + 1) < 10 ? `0${d.getDate() + 1}` : d.getDate();
                        let sqldate = `${d.getFullYear()}-${fullmonth}-${fulldate}`;
                        id = data['0'].id;
                        page_gren('update data', id, data['0'].name, data['0'].addr, sqldate);
                        $("#result").html(pagestr);
                        editpage();
                    }
                });
            });
        }
    });
}

function editpage() {
    $("#update").click(function (e) {
        let data = {
            id: id,
            name: $("#name").val(),
            address: $("#address").val(),
            birthday: $("#birthday").val()
        }

        $.ajax({
            type: "POST",
            url: "/edit",
            data: data,
            success: function (response) {
                let updateresult = `status:${response['status']} message:${response['message']}`;
                $("#result").html(updateresult);
            }
        });
    });
}

export { updatepage };