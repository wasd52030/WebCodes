import THomeEdit from "./edit_page.js"
import { THomeworkInfo } from "./infoPage.js"
import Request from '../CustomLibs/Request.js'
import JsonToFromData from "../CustomLibs/JsonToFromData.js"

function addAction(id) {
    THomeEdit('', id)


    $("#addpg").click(function (e) {
        let data = {
            Cid: $("#classes").val(),
            teacherid: id,
            Infomation: $("#Introduction").val(),
        }
        

        Request().post('index.php?action=newClasshomework', JsonToFromData(data))
            .then(res => {
                let d = res['data']
                let resultmsg = `status:${d['status']} message:${d['message']}`
                $("#result").html(THomeworkInfo(id))
                alert(resultmsg)
            })
            .catch(err => {
                console.error(err)
            })
    })
}

export { addAction }