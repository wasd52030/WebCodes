import Request from './CustomLibs/Request.js';
import { HomePage } from './home_page.js';

export function loginPage() {
    const sp = `
        帳號：<input type="text" id="id"><br>
        密碼：<input type="password" id="password"><br>
        <button id="login">登入</button>
        <div id="content"></div>
    `;
    $("#main").html(sp);

    $("#login").click(function (e) {
        const data = {
            "id": $("#id").val(),
            "password": $("#password").val()
        };
        Request().post('/index.php?action=Login', Qs.stringify(data))
            .then(function (resp) {
                console.log(resp);
                let response = resp['data'];

                if (response['token'] != "") {
                    if (window.localStorage) { //儲存到 local storage
                        window.localStorage.setItem("jwtToken", response['token']);
                        HomePage(data["id"])
                    }
                } else {
                    $("#id").val('')
                    $("#password").val('')
                    alert("帳號或密碼錯誤！")
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    });
}
