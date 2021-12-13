let pagestr = ""
function page_gren(btn_text, Id = "", Name = "", ContactPerson = "", Phone = "", Address = "") {
    pagestr = `<table>`;

    if (btn_text == 'update data') {
        pagestr += `<tr><td></td><td><input type="hidden" id="Id" value=${Id}></td></tr>`;
    }

    pagestr += `<tr><td>名稱: </td><td><input id="Name" value=${Name}></td></tr>`;
    pagestr += `<tr><td>聯絡人: </td><td><input id="ContactPerson" value=${ContactPerson}></td></tr>`;
    pagestr += `<tr><td>電話: </td><td><input id="Phone" value=${Phone}></td></tr>`;
    pagestr += `<tr><td>住址: </td><td><input id="Address" value=${Address}></td></tr>`;
    pagestr += `</table>`
    pagestr += `<button id="${btn_text == 'update data' ? "Update" : "addpg"}" style="margin: 5px 0 0 0;">${btn_text == 'update data' ? "修改" : "新增"}</button>`
}

export { page_gren, pagestr };