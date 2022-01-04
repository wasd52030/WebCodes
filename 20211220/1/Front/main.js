import Request from "./CustomLibs/Request.js"
import { loginPage } from './login_page.js'
import { Mainpage } from "./main_page.js"


$(document).ready(function () {
    if (window.localStorage) {
        Request().get("/index.php")
            .then(res => {
                const response = res["data"]
                if (response["status"] == 200) {
                    window.localStorage.setItem("jwtToken", response["token"])
                    Mainpage()
                } else {
                    loginPage()
                    console.log(response)
                }
            })
            .catch(err => {
                console.log("err")
            })
    }
});