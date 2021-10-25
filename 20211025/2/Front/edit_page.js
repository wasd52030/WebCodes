let pagestr = ""
function page_gren(btn_text, id = 0, pwd = "", email = "", phone = "") {
    pagestr = `<table>`;

    if (btn_text == 'update data') {
        pagestr += `<tr><td></td><td><input type="hidden" id="id" value=${id}></td></tr>`;
    }
    else {
        pagestr += `<tr><td>編號: </td><td><input id="id"></td></tr>`;
    }

    pagestr += `<tr><td>密碼: </td><td><input id="pwd" value=${pwd}></td></tr>`;
    pagestr += `<tr><td>email: </td><td><input id="email" value=${email}></td></tr>`;
    pagestr += `<tr><td>電話: &nbsp;</td><td><input id="phone" value=${phone}></td></tr>`;
    pagestr += `</table>`
    pagestr += `<button id="${btn_text == 'update data' ? "Update" : "addpg"}" style="margin: 5px 0 0 0;">${btn_text == 'update data' ? "修改" : "新增"}</button>`
}

export { page_gren, pagestr };