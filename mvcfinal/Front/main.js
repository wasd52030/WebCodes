import Request from "./CustomLibs/Request.js"
import { HomePage } from "./home_page.js"
import { Mainpage } from "./main_page.js"


$(document).ready(function () {
    if (window.localStorage) {
        Request().get("/index.php")
            .then(res => {
                const response = res["data"]
                console.log(response)
                if (response["status"] == 200) {
                    window.localStorage.setItem("jwtToken", response["token"])
                    let z = JSON.parse(atob(localStorage.getItem("jwtToken").split('.')[1]))
                    let userid = z["data"]["id"]
                    Request().post("index.php?action=getAccount", Qs.stringify({ id: userid }))
                        .then(res => {
                            switch (res["data"]["status"]) {
                                case 200:
                                    HomePage(res["data"]["result"][0]["id"])
                                    break;
                                default:
                                    $("#main").html(res["data"]["message"]);
                                    break
                            }
                        })
                        .catch(err => {
                            console.err(err)
                        })
                } else {
                    Mainpage()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
})