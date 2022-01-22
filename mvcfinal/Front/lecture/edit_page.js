import Request from "../CustomLibs/Request.js"
export default function LectureEdit(btn_text, teacherid = "", id = "", Cid = "") {
    let page = ""
    page = `<table>`

    if (btn_text == 'update') {
        page += `<tr><td></td><td><input type="hidden" id="id" value=${id}></td></tr>`
    }

    page += `<tr><td>課程: </td><td><select id="classes"></select></td></tr>`
    page += `<tr><td>上傳檔案：</td><td><input type="file" id="file" name="file"></td></tr>`
    page += `</table>`
    page += `<button id="${btn_text == 'update' ? "Update" : "addpg"}" style="margin: 5px 0 0 0">${btn_text == 'update' ? "修改" : "新增"}</button>`

    $("#result").html(page)


    Request().post("index.php?action=getClasses", Qs.stringify({ teacherid: teacherid }))
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

            if (btn_text == "update") {
                $("#classes > option").each(function () {
                    if ($(this).val() == Cid) {
                        $("#classes").val(Cid);
                        return
                    }
                });
            }
        })
        .catch(err => {
            console.error(err)
        })
}

