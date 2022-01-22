import Request from "./CustomLibs/Request.js"
import { loginPage } from "./login_page.js"

export function Mainpage() {

    let page = `
        <button id="login">登入</button>
    `

    Request().post("index.php?action=getClassDatas")
        .then(res => {
            switch (res['status']) {
                case 200:
                    let Cdata = res['data']['result']
                    page += `<table border='1'>`;
                    page += `<tr><td>課程編號</td><td>課程名稱</td><td>課程介紹</td><td>開課教師</td><td>每周</td><td>上課節次</td><td>學分數</td></tr>`;
                    Cdata.forEach(element => {
                        page += "<tr>";
                        page += `<td >` + element['Cid'] + "</td>";
                        page += `<td >` + element['Cname'] + "</td>";
                        page += "<td>" + element['Introduction'] + "</td>";
                        page += "<td>" + element["name"] + "</td>";
                        page += "<td>" + element['weekday'] + "</td>";
                        page += `<td>${element['lessonFrom']}-${element['lessonTo']}</td>`;
                        page += "<td>" + element['credit'] + "</td>";
                        page += "</td>"
                    });
                    page += "</table>";
                    
                    $("#main").html(page);

                    $("#login").click(function (e) {
                        loginPage();
                    });
                    break;
                default:
                    $("#result").html(res['message']);
                    break;
            }
        })
        .catch(err => {
            console.error(err)
        })
}

