import LectureEdit from "./edit_page.js"
import { lectureInfo } from "./infoPage.js"
import Request from '../CustomLibs/Request.js'
import JsonToFromData from "../CustomLibs/JsonToFromData.js"

export function editpage(id, teacherid,Cid) {
    Request().post("index.php?action=getClasses", Qs.stringify({ teacherid: teacherid }))
        .then(res => {
            let data = res['data']['result']
            LectureEdit("update", teacherid,id,Cid)

            UpdateAction(teacherid,id)
        })
        .catch(err => {
            console.error(err)
        })
}

function UpdateAction(tid,id) {

    $("#Update").click(function (e) {
        let data = {
            data: $('#file').prop('files')[0],
            Cid: $("#classes").val(),
            teacherid: tid,
            id:id
        }

        Request().post('index.php?action=Updatelecture', JsonToFromData(data))
            .then(res => {
                let d = res['data']
                let updateresult = `status:${d['status']} message:${d['message']}`
                alert(updateresult)
                $("#result").html(lectureInfo(tid))
            })
            .catch(err => {
                console.error(err)
            })
    })
}