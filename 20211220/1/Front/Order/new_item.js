import {showOrderList} from "./show_orderlist.js"

export function newItem() {
    const data = {
        "order_id": $("#order_id").text(),
        "product_id": $("#product_id").text(),
        "number": $("#number").val(),
        "product_price": $("#product_price").text()
    };
    axios.post("http://localhost/test/backend/public/index.php?action=newItem", Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            if (response['status'] != 200)
                $("#order_content").html(response['message']);
            else
                showOrderList();
        })
        .catch(err => {
            console.error(err);
        })
}
