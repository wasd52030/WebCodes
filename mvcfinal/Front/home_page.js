import { Mainpage } from "./main_page.js"
import Request from "./CustomLibs/Request.js"
import ProfileEdit from "./profile_update.js"
import { ClassInfo } from "./ClassData/infoPage.js"
import { lectureInfo } from "./lecture/infoPage.js"
import { THomeworkInfo } from "./THomework/infoPage.js"
import { ClassChooseList, ClassChooseed } from "./ClassChoose/infoPage.js"
import JsonToFromData from "./CustomLibs/JsonToFromData.js"

export function HomePage(id) {

    Request().post("index.php?action=getAccount", Qs.stringify({ id: id }))
        .then(res => {
            switch (res["data"]["status"]) {
                case 200:
                    let name = res["data"]["result"][0]["name"]
                    let role = res["data"]["role"]
                    let page = ""
                    page += `<div>${name}${role == 1 ? "老師" : "同學"}，您好！</div>`
                    page += `<button id="profile">個人資料管理</button>`
                    if (role == 1) {
                        page += `
                            <button id="ClassManage">課程管理</button>
                            <button id="lecture">講義管理</button>
                            <button id="Homework">作業發布</button>
                            <button id="TeacherScore">批改作業與分數登記</button>
                        `
                    } else {
                        page += `
                            <button id="ClassChoose">課程選修</button>
                            <button id="StudentChoose">選修課程一覽</button>
                            <button id="StudentScore">選修課程成績一覽</button>
                        `
                    }

                    page += `
                        <button id="logout">登出</button>
                        <div id="content"></div>
                    `

                    $("#main").html(page)

                    $("#logout").click(function (e) {
                        localStorage.removeItem("jwtToken")
                        $("#result").html("")
                        Mainpage()
                    })

                    $("#ClassManage").click(function (e) {
                        ClassInfo(res["data"]["result"][0]["id"])
                    })

                    $("#lecture").click(function (e) {
                        lectureInfo(res["data"]["result"][0]["id"])
                    })

                    $("#Homework").click(function (e) {
                        THomeworkInfo(res["data"]["result"][0]["id"])
                    })

                    $("#ClassChoose").click(function (e) {
                        ClassChooseList(res["data"]["result"][0]["id"])
                    })

                    $("#StudentChoose").click(function (e) {
                        ClassChooseed(res["data"]["result"][0]["id"])
                    })

                    $("#TeacherScore").click(function (e) {
                        HomeworkScore(res["data"]["result"][0]["id"])
                    })

                    $("#StudentScore").click(function (e) {
                        Request().post("index.php?action=getTranscript", JsonToFromData({ Sid: res["data"]["result"][0]["id"] }))
                            .then(res => {
                                let data = res["data"]["result"]
                                let page = ''
                                if (data.length == 0) {
                                    page += "<div>尚未選修課程</div>"
                                } else {
                                    page += `<table border='1'>`
                                    page +=`<tr><td colspan="5">總成績計算：作業平均*0.4+期中*0.3+期末*0.3</td></tr>`
                                    page += `<tr><td>課程名稱</td><td>作業平均</td><td>期中分數</td><td>期末分數</td><td>總成績</td></tr>`
                                    data.forEach(element => {
                                        page += "<tr>"
                                        page += `<td>` + element['Cname'] + "</td>"
                                        page += `<td>` + element['Havg'] + "</td>"
                                        page += `<td>` + element['Midtern'] + "</td>"
                                        page += `<td>` + element['Final'] + `</td>`
                                        page += `<td>${Number.parseFloat(element['Havg']) * 0.4 + Number.parseFloat(element['Midtern']) * 0.3 + Number.parseFloat(element['Final']) * 0.3}</td>`
                                        page += "</tr>"
                                    })
                                    page += "</table>"
                                    page += `<div id="x">`
                                }
                                $("#result").html(page)
                            })
                            .catch(err => {
                                console.error(err)
                            })
                    });


                    $("#profile").click(function (e) {
                        Request().post("index.php?action=getAccount", Qs.stringify({ id: id }))
                        ProfileEdit(
                            res["data"]["result"][0]["id"], res["data"]["result"][0]["password"], res["data"]["result"][0]["name"],
                            res["data"]["result"][0]["email"], res["data"]["result"][0]["phone"]
                        )

                        $("#Update").on("click", function () {
                            let data = {
                                id: $("#id").val(),
                                password: $("#password").val(),
                                name: $("#name").val(),
                                email: $("#email").val(),
                                phone: $("#phone").val(),
                            }

                            Request().post("index.php?action=updateAccount", Qs.stringify(data))
                                .then(res => {
                                    let d = res["data"]
                                    let resultmsg = `status:${d["status"]} message:${d["message"]}`
                                    $("#result").html("")
                                    alert(resultmsg)
                                })
                                .catch(err => {
                                    console.err(err)
                                })
                        })
                    })
                    break

                default:
                    break
            }
        })
        .catch(err => {
            console.log(err)
        })
}

function HomeworkScore(id) {
    let page = `課程: <select id="classes"></select><div id="h"><div id="se"></div></div><div id="mid"></div><div id="ex"></div>`
    $("#result").html(page)
    Request().post("index.php?action=getClasses", Qs.stringify({ teacherid: id }))
        .then(res => {
            switch (res['status']) {
                case 200:
                    let Cdata = res['data']['result']
                    Cdata.forEach(e => {
                        $("#classes").append(
                            $('<option>', {
                                value: e["Cid"],
                                text: e["Cname"]
                            })
                        )
                    })
                    break
                default:
                    $("#result").html(res['message'])
                    break
            }
        })
        .catch(err => {
            console.error(err)
        })

    $("#classes").change(function (e) {
        Request().post("index.php?action=getClassHomework", JsonToFromData({ Cid: $("#classes").val() }))
            .then(res => {
                let Cdata = res['data']['result']
                let page = ''
                if (Cdata.length == 0) {
                    page += "<div>學生尚未繳交作業或是未發布作業<br>或者是可能沒有學生修這門課</div>"
                } else {
                    page += `<table border='1'>`
                    page += `<tr><td>學生姓名</td><td>作業檔案</td><td>作業成績</td></tr>`
                    Cdata.forEach(element => {
                        page += "<tr>"
                        page += `<td >` + element['name'] + "</td>"
                        page += `<td>
                                            <a href="#" id="http://localhost/mvcfinal/Back/public/index.php?action=getHomeworkFile&filename=${element["HomeworkFile"]}&Hid=${element['Hid']}" class="file">
                                                ${element["HomeworkFile"]}
                                            </a>
                                    </td>`
                        page += `<td >` + element['HomeworkScore'] + "</td>"
                        page += `<td><button class="hscore" D=${element['id']} sn=${element['name']} info=${element['Infomation']}>打作業分數</button></td>`
                    })
                    page += "</table>"
                    page += `<div id="se">`
                }

                $("#h").html(page)

                $(".hscore").click(function (e) {
                    let hid = $(this).attr("d")
                    let page = `
                            現在打的是${$(this).attr("sn")}的交的作業說明為${$(this).attr("info")}的作業分數
                            <input min="0" max="100" id="SCORE" type="number" />
                            <button id="hw">送出</button>
                        `
                    $("#se").html(page)
                    $("#hw").click(function (e) {
                        let data = {
                            id: hid,
                            HomeworkScore: $("#SCORE").val()
                        }
                        Request().post("index.php?action=UpdatehomeworkScore", JsonToFromData(data))
                            .then(res => {
                                let d = res['data']
                                let resultmsg = `status:${d['status']} message:${d['message']}`
                                HomeworkScore(id)
                                alert(resultmsg)
                            })
                    })
                })

                $(".file").on("click", function () {
                    let r = Request()
                    r["defaults"]["headers"]["responseType"] = "blob"

                    r.get(this.id)
                        .then(res => {
                            window.open(res.data.filelink)
                        })
                        .catch(err => { console.log(err) })
                })
            })
            .catch(err => {
                console.error(err)
            })

        Request().post("index.php?action=gerRecordsByCid", JsonToFromData({ Cid: $("#classes").val() }))
            .then(res => {
                let Cdata = res['data']['result']
                let page = ''
                if (Cdata.length == 0) {
                    page += "<div>有可能沒有學生修這門課</div>"
                } else {
                    page += `<table border='1'>`
                    page += `<tr><td>學生姓名</td><td>期中分數</td></tr>`
                    Cdata.forEach(element => {
                        page += "<tr>"
                        page += `<td >` + element['name'] + "</td>"
                        page += `<td >` + element['Midtern'] + "</td>"
                        page += `<td><button class="mscore" D=${element['id']} sn=${element['name']}>打期中分數</button></td>`
                    })
                    page += "</table>"
                    page += `<div id="x">`
                }
                $("#mid").html(page)

                $(".mscore").click(function (e) {
                    let hid = $(this).attr("d")
                    let page = `
                            現在打的是${$(this).attr("sn")}的期中分數
                            <input min="0" max="100" id="SCORE" type="number" />
                            <button id="midd">送出</button>
                        `
                    $("#x").html(page)
                    $("#midd").click(function (e) {
                        let data = {
                            id: hid,
                            Mid: $("#SCORE").val()
                        }
                        Request().post("index.php?action=UpdateMidtern", JsonToFromData(data))
                            .then(res => {
                                let d = res['data']
                                let resultmsg = `status:${d['status']} message:${d['message']}`
                                HomeworkScore(id)
                                alert(resultmsg)
                            })
                    })
                })
            })
            .catch(err => {
                console.error(err)
            })

        Request().post("index.php?action=gerRecordsByCid", JsonToFromData({ Cid: $("#classes").val() }))
            .then(res => {
                let Cdata = res['data']['result']
                let page = ''
                if (Cdata.length == 0) {
                    page += "<div>有可能沒有學生修這門課</div>"
                } else {
                    page += `<table border='1'>`
                    page += `<tr><td>學生姓名</td><td>期末分數</td></tr>`
                    Cdata.forEach(element => {
                        page += "<tr>"
                        page += `<td >` + element['name'] + "</td>"
                        page += `<td >` + element['Final'] + "</td>"
                        page += `<td><button class="fs" D=${element['id']} sn=${element['name']}>打期末分數</button></td>`
                    })
                    page += "</table>"
                    page += `<div id="vx">`
                }
                $("#ex").html(page)

                $(".fs").click(function (e) {
                    let hid = $(this).attr("d")
                    let page = `
                            現在打的是${$(this).attr("sn")}的期末分數
                            <input min="0" max="100" id="SCORE" type="number" />
                            <button id="final">送出</button>
                        `
                    $("#vx").html(page)
                    $("#final").click(function (e) {
                        let data = {
                            id: hid,
                            Fin: $("#SCORE").val()
                        }
                        Request().post("index.php?action=UpdateFinal", JsonToFromData(data))
                            .then(res => {
                                let d = res['data']
                                let resultmsg = `status:${d['status']} message:${d['message']}`
                                HomeworkScore(id)
                                alert(resultmsg)
                            })
                    })
                })
            })
            .catch(err => {
                console.error(err)
            })
    })
}