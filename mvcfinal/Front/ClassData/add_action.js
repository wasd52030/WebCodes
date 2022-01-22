import { ClassInfo } from "./infoPage.js";
import Request from '../CustomLibs/Request.js';
import EditClass from "./edit_page.js";


function addAction(id) {
    EditClass('', id)

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


    $("#addpg").click(function (e) {
        if (!lessonVaild) {
            alert("結束的節次必定比開始的節次大！")
            return
        }

        let data = {
            Cname: $("#name").val(),
            teacherid: id,
            Introduction: $("#Introduction").val(),
            weekday: $("#weekday").val(),
            lessonFrom: $("#from").val(),
            lessonTo: $("#to").val(),
            credit: $("#credit").val(),
        }
        
        Request().post('index.php?action=newClassData', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                let resultmsg = `status:${d['status']} message:${d['message']}`;
                $("#result").html(ClassInfo(id));
                alert(resultmsg);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { addAction }