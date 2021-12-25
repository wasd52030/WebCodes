let pagestr = ""
function page_gren(btn_text, id = "", name = "") {
    pagestr = `<table>`;

    if (btn_text == 'update data') {
        pagestr += `<tr><td></td><td><input type="hidden" id="id" value=${id}></td></tr>`;
    }

    pagestr += `<tr><td>名稱: </td><td><input id="name" value=${name}></td></tr>`;
    pagestr += `</table>`
    pagestr += `<button id="${btn_text == 'update data' ? "Update" : "addpg"}" style="margin: 5px 0 0 0;">${btn_text == 'update data' ? "修改" : "新增"}</button>`
}

export { page_gren, pagestr };