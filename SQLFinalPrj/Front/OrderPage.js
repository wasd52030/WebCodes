let pagestr = ""
function orderpage(id, name, price,ordercnt) {
    pagestr = "";
    $("#odr").html(pagestr);

    pagestr += '<table>';
    pagestr += `<tr><td>股票代號：${id}</td></tr>`;
    pagestr += `<tr><td>公司名稱：${name}</td></tr>`;
    pagestr += `<tr><td>開盤價格：${price}</td></tr>`;
    pagestr += `<tr><td>欲購買數量：<input type="number" min="1" id="price" value="${ordercnt}"></td></tr>`;
    pagestr += `<tr><td><input type="button" min="1" id="ALRODR" value="確定購買"></td></tr>`;
    
    $("#result").html(pagestr);
}

export { orderpage };