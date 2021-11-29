let pagestr = ""
function page_gren(btn_text, id = "", name = "", cost = "", price = "", count = "") {
    pagestr = `<table>`;

    if (btn_text == 'update data') {
        pagestr += `<tr><td></td><td><input type="hidden" id="id" value=${id}></td></tr>`;
    }
    else {
        pagestr += `<tr><td>產品編號: </td><td><input id="id"></td></tr>`;
    }

    pagestr += `<tr><td>產品名稱: </td><td><input id="name" value=${name}></td></tr>`;
    pagestr += `<tr><td>成本: </td><td><input id="cost" value=${cost}></td></tr>`;
    pagestr += `<tr><td>售價: </td><td><input id="price" value=${price}></td></tr>`;
    pagestr += `<tr><td>數量: </td><td><input id="count" value=${count}></td></tr>`;
    pagestr += `</table>`
    pagestr += `<button id="${btn_text == 'update data' ? "Update" : "addpg"}" style="margin: 5px 0 0 0;">${btn_text == 'update data' ? "修改" : "新增"}</button>`
}

export { page_gren, pagestr };