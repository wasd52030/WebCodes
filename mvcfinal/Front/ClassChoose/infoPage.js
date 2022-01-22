import Request from '../CustomLibs/Request.js'
import HomeWorkHandin from './HandHomweork.js'
import JsonToFromData from '../CustomLibs/JsonToFromData.js'

export function ClassChooseList(id) {
    let page = ''
    Request().post("index.php?action=getChooseList", Qs.stringify({ Sid: id }))
        .then(res => {
            switch (res['status']) {
                case 200:
                    let Cdata = res['data']['result']
                    if (Cdata.length == 0) {
                        page += "<div>尚未有老師開設課程</div>"
                    } else {
                        page += `<table border='1'>`
                        page += `<tr><td>課程編號</td><td>課程名稱</td><td>課程介紹</td><td>上課教師</td><td>每周</td><td>上課節次</td><td>學分數</td></tr>`
                        Cdata.forEach(element => {
                            page += "<tr>"
                            page += `<td >` + element['Cid'] + "</td>"
                            page += `<td >` + element['Cname'] + "</td>"
                            page += "<td>" + element['Introduction'] + "</td>"
                            page += "<td>" + element['teacher'] + "</td>"
                            page += "<td>" + element['weekday'] + "</td>"
                            page += `<td>${element['lessonFrom']}-${element['lessonTo']}</td>`
                            page += "<td>" + element['credit'] + "</td>"
                            page += `<td>
                                    <button id=${element['Cid']} class='add'>加選</button>
                                </td>`
                        })
                        page += "</table>"
                    }
                    $("#result").html(page)

                    $(".add").click(function (e) {
                        Request().post("index.php?action=ChooseClass", Qs.stringify({ Sid: id, Cid: this.id }))
                            .then(res => {
                                console.log(res)
                                alert(`status:${res["data"]["status"]}\nmessage:${res["data"]["message"]}`)
                                ClassChooseList(id)
                            })
                            .catch(err => { console.err(err) })
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
}

export function ClassChooseed(id) {
    let page = ''
    Request().post("index.php?action=getChooseed", Qs.stringify({ Sid: id }))
        .then(res => {
            switch (res['status']) {
                case 200:
                    let Cdata = res['data']['result']
                    if (Cdata.length == 0) {
                        page += "<div>尚未選修任何課程</div>"
                    } else {
                        page += `<table border='1'>`
                        page += `<tr><td>課程編號</td><td>課程名稱</td><td>課程介紹</td><td>上課教師</td><td>每周</td><td>上課節次</td><td>學分數</td></tr>`
                        Cdata.forEach(element => {
                            page += "<tr>"
                            page += `<td >` + element['Cid'] + "</td>"
                            page += `<td >` + element['Cname'] + "</td>"
                            page += "<td>" + element['Introduction'] + "</td>"
                            page += "<td>" + element['teacher'] + "</td>"
                            page += "<td>" + element['weekday'] + "</td>"
                            page += `<td>${element['lessonFrom']}-${element['lessonTo']}</td>`
                            page += "<td>" + element['credit'] + "</td>"
                            page += `<td>
                                    <button id=${element['Cid']} class='lecture'>查看課程講義</button>
                                    <button id=${element['Cid']} class='homework'>查看課程作業</button>
                                    <button Cid=${element['Cid']} Sid=${id} class='del'>退選</button>
                                </td>`
                        })
                        page += "</table>"
                    }

                    $("#result").html(page)

                    $(".del").click(function (e) {
                        //removeChoose
                        Request().post("index.php?action=removeChoose", JsonToFromData({ Sid: $(this).attr("Sid"), Cid: $(this).attr("Cid") }))
                            .then(res => {
                                let d = res['data']
                                let resultmsg = `status:${d['status']} message:${d['message']}`
                                $("#result").html(ClassChooseed($(this).attr("Sid")))
                                alert(resultmsg)
                            })
                            .catch(err => {
                                console.err(err)
                            })
                    })

                    $(".lecture").click(function (e) {
                        Request().post("index.php?action=getlectureList", Qs.stringify({ Cid: this.id }))
                            .then(res => {
                                switch (res['status']) {
                                    case 200:
                                        let data = res['data']['result']
                                        let page = ''
                                        if (data.length == 0) {
                                            page += "<div>尚未有任何講義</div>"
                                        } else {
                                            page += `<table border='1'>`
                                            page += `<tr><td>編號</td><td>課程編號</td><td>課程名稱</td><td>講義連結</td></tr>`
                                            data.forEach(element => {
                                                page += "<tr>"
                                                page += `<td >` + element['id'] + "</td>"
                                                page += `<td >` + element['Cid'] + "</td>"
                                                page += `<td >` + element['Cname'] + "</td>"
                                                page += `<td>
                                                            <a href="#" id="http://localhost/mvcfinal/Back/public/index.php?action=getlectureFile&filename=${element["lectureFile"]}&Cid=${element['Cid']}" class="file">
                                                                ${element["lectureFile"]}
                                                            </a>
                                                        </td>`
                                            })
                                            page += "</table>"
                                        }

                                        $("#result").html(page)
                                        actions(id)
                                        break
                                    default:
                                        $("#result").html(res['message'])
                                        break
                                }
                            })
                            .catch(err => {
                                console.error(err)
                            })
                    })

                    $(".homework").click(function (e) {
                        Request().post("index.php?action=getClasshomeworks", Qs.stringify({ Cid: this.id }))
                            .then(res => {
                                switch (res['status']) {
                                    case 200:
                                        let data = res['data']['result']
                                        let page = ''
                                        if (data.length == 0) {
                                            page += "<div>尚未有任何作業</div>"
                                            $("#result").html(page)
                                            return
                                        } else {
                                            page += `<table border='1'>`
                                            page += `<tr><td>課程名稱</td><td>作業描述</td></tr>`
                                            data.forEach(element => {
                                                page += "<tr>"
                                                page += `<td >` + element['Cname'] + "</td>"
                                                page += `<td >` + element['Infomation'] + "</td>"
                                                page += `<td><button id="${element['id']}" class='HandHomework' Cid="${element["Cid"]}" Cname=${element['Cname']} Sid=${id} info=${element['Infomation']}>繳交</button></td>`
                                            })
                                            page += "</table>"
                                        }

                                        data.forEach(e => {
                                            Request().post("index.php?action=getHandHomeworkList", Qs.stringify({ Hid: e["id"], Sid: id }))
                                                .then(res => {
                                                    switch (res['status']) {
                                                        case 200:
                                                            let data = res['data']['result']
                                                            if (data.length == 0) {
                                                                page += "<div>尚未繳交任何作業</div>"
                                                            } else {
                                                                page += `<table style="margin:5px 0 5px 0">`
                                                                page += `<tr><td colspan="3">已繳交的作業</td></tr>`
                                                                page += `<tr><td>繳交編號</td><td>課程名稱</td><td>作業描述</td><td>作業檔案</td></tr>`
                                                                data.forEach(element => {
                                                                    page += "<tr>"
                                                                    page += `<td >` + element['id'] + "</td>"
                                                                    page += `<td >` + element['Cname'] + "</td>"
                                                                    page += `<td >` + element['Infomation'] + "</td>"
                                                                    page += `<td>
                                                                    <a href="#" id="http://localhost/mvcfinal/Back/public/index.php?action=getHomeworkFile&filename=${element["HomeworkFile"]}&Hid=${element['Hid']}" class="file">
                                                                                ${element["HomeworkFile"]}
                                                                            </a>
                                                                        </td>`
                                                                    page += `<td><button id="${element['id']}" class='delete'>刪除</button></td>`
                                                                })
                                                            }
                                                            page += "</table>"
                                                            $("#result").html(page)

                                                            actions(id)
                                                            break
                                                        default:
                                                            $("#result").html(res['message'])
                                                            break
                                                    }
                                                })
                                                .catch(err => {
                                                    console.error(err)
                                                })
                                        })



                                    default:
                                        $("#result").html(res['message'])
                                        break
                                }
                            })
                            .catch(err => {
                                console.error(err)
                            })
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
}

function actions(Sid) {
    $(".file").on("click", function () {
        let u = new URL(this.id)

        let r = Request()
        r["defaults"]["headers"]["responseType"] = "blob"

        r.get(this.id)
            .then(res => {
                window.open(res.data.filelink)
            })
            .catch(err => { console.log(err) })
    })


    $(".HandHomework").click(function (e) {
        HomeWorkHandin("", $(this).attr("id"), $(this).attr("Cname"), $(this).attr("Cid"), $(this).attr("Sid"), $(this).attr("info"))

        $("#addpg").click(function (e) {
            let data = {
                data: $('#file').prop('files')[0],
                Cid: $(this).attr("Cid"),
                Sid: $(this).attr("Sid"),
                Hid: $("#id").val()
            }


            Request().post('index.php?action=newHandHomework', JsonToFromData(data))
                .then(res => {
                    let d = res['data']
                    let resultmsg = `status:${d['status']} message:${d['message']}`
                    $("#result").html(ClassChooseed($(this).attr("Sid")))
                    alert(resultmsg)
                })
                .catch(err => {
                    console.error(err)
                })
        })
    })

    $(".delete").click(function (e) {
        Request().post('index.php?action=removeHomework', JsonToFromData({ id: this.id }))
            .then(res => {
                let d = res['data']
                let resultmsg = `status:${d['status']} message:${d['message']}`
                $("#result").html(ClassChooseed(Sid))
                alert(resultmsg)
            })
            .catch(err => {
                console.error(err)
            })
    })
}