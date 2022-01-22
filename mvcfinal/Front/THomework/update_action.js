import THomeEdit from "./edit_page.js"
import { THomeworkInfo } from "./infoPage.js"
import Request from '../CustomLibs/Request.js'
import JsonToFromData from "../CustomLibs/JsonToFromData.js"

export function editpage(id, teacherid, Cid) {
    Request().post("index.php?action=getClasshomeworks", Qs.stringify({ id: id }))
        .then(res => {
            let data = res['data']['result']
            THomeEdit("update", teacherid, data[0]["Infomation"], id, Cid)

            UpdateAction(teacherid, id)
        })
        .catch(err => {
            console.error(err)
        })
}

function UpdateAction(tid, id) {

    $("#Update").click(function (e) {
        let data = {
            Cid: $("#classes").val(),
            teacherid: id,
            Infomation: $("#Introduction").val(),
            id: id
        }

        Request().post('index.php?action=updateClasshomework', JsonToFromData(data))
            .then(res => {
                let d = res['data']
                let updateresult = `status:${d['status']} message:${d['message']}`
                alert(updateresult)
                $("#result").html(THomeworkInfo(tid))
            })
            .catch(err => {
                console.error(err)
            })
    })
}