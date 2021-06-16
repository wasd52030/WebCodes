let pagestr = ""
function page_gren(btn_text, id = 0, name = "", price = 0, mk_price = 0) {
    pagestr = `<table>`;

    if (btn_text == 'update data') {
        pagestr += `<tr><td></td><td><input type="hidden" id="id" value=${id}></td></tr>`;
    }
    else {
        pagestr += `<tr><td>股票代號： </td><td><input type="number" min="1" id="id"></td></tr>`;
    }

    pagestr += `<tr><td>公司名稱: </td><td><input id="name" value=${name}></td></tr>`;
    pagestr += `<tr><td>開盤價格: </td><td><input id="price" type="number" step="0.001" min="0.001" value=${price}></td></tr>`;
    pagestr += `<tr><td>總成交額(百萬): &nbsp;</td><td><input type="number" step="0.001" min="0.001"  id="mk_price" value=${mk_price}></td></tr>`;
    pagestr += `</table>`
    pagestr += `<button id="${btn_text == 'update data' ? "Update" : "addpg"}" style="margin: 5px 0 0 0;">${btn_text}</button>`
}

export { page_gren, pagestr };