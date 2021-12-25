import { newItem } from "./new_item.js"

export function newOrder() {
    axios.all([
        axios.post("http://localhost/20211220/1/Back/public/index.php?action=newOrder"),
        axios.get("http://localhost/20211220/1/Back/public/index.php?action=getProducts")
    ])
        .then(axios.spread((res1, res2) => {
            const response1 = res1['data'];
            console.log(response1)
            switch (response1['status']) {
                case 200:
                    const result1 = response1['result'];
                    let str = `訂購者：` + result1['user_id'] + `<br>`;
                    str += `日期：` + result1['date'] + `<br>`;
                    str += `訂單編號：<span id="order_id">` + result1['id'] + `</span><br>`;

                    const response2 = res2['data'];
                    const result2 = response2['result'];
                    str += `編號：<span id="product_id">` + result2[0]['id'] + `</span><br>`;
                    str += `名稱：<select id="product_name">`;
                    result2.forEach(element => {
                        str += "<option>" + element['name'] + "</option>";
                    });
                    str += `</select><br>`;
                    str += `價格：<span id="product_price">` + result2[0]['price'] + `</span><br>`;
                    str += `數量：<input type="text" id="number" value="2"><br>`;
                    str += `<button id="newItem">新增</button>`;
                    str += `<div id="order_content"></div>`;
                    $("#content").html(str);

                    $("#product_name").change(function (e) {
                        const idx = $("#product_name").prop('selectedIndex');
                        $("#product_id").text(result2[idx]['id']);
                        $("#product_price").text(result2[idx]['price']);
                    });

                    $("#newItem").click(function () {
                        newItem();
                    });
                    break;
                default:
                    $("#content").html(response['message']);
                    break;
            }
        }))
        .catch(err => {
            console.error(err);
        })
}

