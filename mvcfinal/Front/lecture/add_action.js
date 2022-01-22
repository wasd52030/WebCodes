import LectureEdit from "./edit_page.js"
import { lectureInfo } from "./infoPage.js"
import Request from '../CustomLibs/Request.js'
import JsonToFromData from "../CustomLibs/JsonToFromData.js"

function addAction(id) {
    LectureEdit('', id)


    $("#addpg").click(function (e) {
        let data = {
            data: $('#file').prop('files')[0],
            Cid: $("#classes").val(),
            teacherid: id
        }
        

        Request().post('index.php?action=newlecture', JsonToFromData(data))
            .then(res => {
                let d = res['data']
                let resultmsg = `status:${d['status']} message:${d['message']}`
                $("#result").html(lectureInfo(id))
                alert(resultmsg)
            })
            .catch(err => {
                console.error(err)
            })
    })
}

export { addAction }