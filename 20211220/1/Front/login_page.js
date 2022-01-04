import Request from './CustomLibs/Request.js';

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
                
                if (window.localStorage) { //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                }
                window.location.reload(); //重新載入網頁
            })
            .catch(function (err) {
                console.log(err);
            });
    });
}
