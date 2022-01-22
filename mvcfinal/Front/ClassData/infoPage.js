import { addAction } from "./add_action.js"
import { editpage } from "./update_action.js"
import { delAction } from "./del_action.js"
import Request from '../CustomLibs/Request.js'

export function ClassInfo(id) {
    let page = ''
    Request().post("index.php?action=getClasses", Qs.stringify({ teacherid: id }))
        .then(res => {
            switch (res['status']) {
                case 200:
                    let Cdata = res['data']['result']
                    page += `<button id="${id}" class="add">新增課程</button>`
                    if (Cdata.length == 0) {
                        page+="<div>尚未開設任何課程！</div>"
                    } else {
                        page += `<table border='1'>`
                        page += `<tr><td>課程編號</td><td>課程名稱</td><td>課程介紹</td><td>每周</td><td>上課節次</td><td>學分數</td></tr>`
                        Cdata.forEach(element => {
                            page += "<tr>"
                            page += `<td >` + element['Cid'] + "</td>"
                            page += `<td >` + element['Cname'] + "</td>"
                            page += "<td>" + element['Introduction'] + "</td>"
                            page += "<td>" + element['weekday'] + "</td>"
                            page += `<td>${element['lessonFrom']}-${element['lessonTo']}</td>`
                            page += "<td>" + element['credit'] + "</td>"
                            page += `<td>
                                    <button id=${element['Cid']} class='updateClass'>修改</button>
                                    <button id=${element['Cid']} class='deleteClass'>刪除</button>
                                </td>`
                        })
                        page += "</table>"
                    }
                    $("#result").html(page)

                    $(".add").click(function (e) {
                        addAction(this.id)
                    })

                    actions(Cdata[0]["teacherid"])
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

function actions(teacherid) {

    $(".updateClass").click(function (e) {
        let id = this.id
        editpage(id)
    })

    $(".deleteClass").click(function (e) {
        let id = this.id
        delAction(id, teacherid)
    })

}