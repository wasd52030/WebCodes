import EditClass from "./edit_page.js"
import { ClassInfo } from "./infoPage.js"
import Request from '../CustomLibs/Request.js'

export function editpage(id) {
    Request().post('index.php?action=getClassDatas', Qs.stringify({ Cid: id }))
        .then(res => {
            let data = res['data']['result']
            EditClass("update", data[0]["teacherid"], data[0]["Cname"], data[0]["Introduction"], data[0]["credit"])

            $("#weekday > option").each(function() {
                if(this.text==data[0]['weekday']){
                    $("#weekday").val(data[0]['weekday']);
                    return
                }
            });

            $("#from > option").each(function() {
                if(this.text==data[0]['lessonFrom']){
                    $("#from").val(data[0]['lessonFrom']);
                    return
                }
            });

            $("#to > option").each(function() {
                if(this.text==data[0]['lessonTo']){
                    $("#to").val(data[0]['lessonTo']);
                    return
                }
            });
            
            UpdateAction(data[0]["Cid"])
        })
        .catch(err => {
            console.error(err)
        })
}

function UpdateAction(id) {

    let lessonVaild = true

    $(".lesson").change(function (e) {

        let lessonFrom = $("#from").val()
        let lessonTo = $("#to").val()

        if (Number.parseInt(lessonTo) - Number.parseInt(lessonFrom) < 0) {
            alert("結束的節次必定比開始的節次大！")
            $("#credit").val(0)
            lessonVaild = false
        } else {
            $("#credit").val(Number.parseInt(lessonTo) - Number.parseInt(lessonFrom) + 1)
            lessonVaild = true
        }
    });

    $("#Update").click(function (e) {

        if (!lessonVaild) {
            alert("結束的節次必定比開始的節次大！")
            return
        }

        let data = {
            Cid: id,
            Cname: $("#name").val(),
            teacherid: $("#teacher").val(),
            Introduction: $("#Introduction").val(),
            weekday: $("#weekday").val(),
            lessonFrom: $("#from").val(),
            lessonTo: $("#to").val(),
            credit: $("#credit").val(),
        }

        Request().post('index.php?action=updateClassData', Qs.stringify(data))
            .then(res => {
                let d = res['data']
                let updateresult = `status:${d['status']} message:${d['message']}`
                alert(updateresult)
                $("#result").html(ClassInfo($("#teacher").val()))
            })
            .catch(err => {
                console.error(err)
            })
    })
}