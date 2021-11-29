let pagestr = ""
function page_gren(btn_text, id = 0, name = "", pwd = "", EntryDate = "", address = "", email = "", phone = "") {
    pagestr = `<table>`;

    if (btn_text == 'update data') {
        pagestr += `<tr><td></td><td><input type="hidden" id="id" value=${id}></td></tr>`;
    }
    else {
        pagestr += `<tr><td>員工編號: </td><td><input id="id"></td></tr>`;
    }

    pagestr += `<tr><td>姓名: </td><td><input id="name" value=${name}></td></tr>`;
    pagestr += `<tr><td>密碼: </td><td><input id="pwd" value=${pwd}></td></tr>`;
    pagestr += `<tr><td>入職日期: </td><td><input type="date" id="EntryDate" value=${EntryDate}></td></tr>`;
    pagestr += `<tr><td>住址: </td><td><input id="address" value=${address}></td></tr>`;
    pagestr += `<tr><td>email: </td><td><input id="email" value=${email}></td></tr>`;
    pagestr += `<tr><td>電話: &nbsp;</td><td><input id="phone" value=${phone}></td></tr>`;
    pagestr += `</table>`
    pagestr += `<button id="${btn_text == 'update data' ? "Update" : "addpg"}" style="margin: 5px 0 0 0;">${btn_text == 'update data' ? "修改" : "新增"}</button>`
}

export { page_gren, pagestr };