import { addAction } from "./add_action.js"
import { editpage } from "./update_action.js"
import { delAction } from "./del_action.js"
import Request from '../CustomLibs/Request.js'

export function THomeworkInfo(id) {
    Request().post("index.php?action=getClasshomeworks", Qs.stringify({ teacherid: id }))
        .then(res => {
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    let page = ''
                    page += `<button id='add' style="magrin 5px 5px 5px 5px;">新增</button>`
                    if (data.length == 0) {
                        page += "<div>尚未有任何作業</div>"
                    } else {
                        page += `<table border='1'>`
                        page += `<tr><td>編號</td><td>課程名稱</td><td>作業描述</td></tr>`
                        data.forEach(element => {
                            page += "<tr>"
                            page += `<td >` + element['id'] + "</td>"
                            page += `<td >` + element['Cname'] + "</td>"
                            page += `<td >` + element['Infomation'] + "</td>"
                            page += `<td><button id="${element['id']}" class='updateUser' name="${element["Cid"]}">更新</button><button id="${element['id']}" class='deleteUser'>刪除</button></td>`
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
}

function actions(teacherid, Cid) {
    $(".file").on("click", function () {
        Request().get(this.id)
            .then(res => {
                window.open(res.data.filelink)
            })
            .catch(err => { console.log(err) })
    });

    $("#add").click(function (e) {
        addAction(teacherid)
    })

    $(".updateUser").click(function (e) {
        let id = this.id
        let Cid = this.name
        editpage(id, teacherid, Cid)
    })

    $(".deleteUser").click(function (e) {
        let id = this.id
        delAction(id, teacherid)
    })

}