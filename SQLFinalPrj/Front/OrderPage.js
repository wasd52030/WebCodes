let pagestr = ""
function orderpage(id, name, price, ordercnt, action) {
    pagestr = "";

    pagestr += '<table>';
    pagestr += `<tr><td>股票代號：${id}</td></tr>`;
    pagestr += `<tr><td>公司名稱：${name}</td></tr>`;
    pagestr += `<tr><td>開盤價格(每股)：${price}</td></tr>`;
    pagestr += `<tr><td>欲購買數量：<input type="number" min="1" id="buys" value="${ordercnt}"></td></tr>`;
    pagestr += `<tr><td><input type="button" min="1" id="ALRODR" value="${action == 'buy' ? '確定購買':'確定修改'}"></td></tr>`;

    $("#result").html(pagestr);
}

export { orderpage };