export default function HomeWorkHandin(btn_text, id = "", Cname, Cid = "", Sid = "", Information) {
    let page = ""
    page = `<table>`
    page += `<tr><td></td><td><input type="hidden" id="id" value=${id}></td></tr>`
    page += `<tr><td>課程：</td><td>${Cname}</td></tr>`
    page += `<tr><td>作業說明：</td><td><textarea id="info" disabled="disabled"></textarea></td></tr>`;
    page += `<tr><td>上傳檔案：</td><td><input type="file" id="file" name="file"></td></tr>`
    page += `</table>`
    page += `<button Cid=${Cid} Sid=${Sid} id="${btn_text == 'update' ? "Update" : "addpg"}" style="margin: 5px 0 0 0">${btn_text == 'update' ? "修改" : "繳交"}</button>`

    $("#result").html(page)
    $("#info").val(Information);


}

