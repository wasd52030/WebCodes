import { page_gren } from './EditPage.js'
import { serachpage } from "./SearchList.js";

let id = 0;
function updateAction() {
    $("#Usel").click(function (e) {
        axios.post('http://localhost/SQLFinalPrj/Back/index.php?action=Select', Qs.stringify({ id: $("input[id='id']:checked").val() }))
            .then(res => {
                let data = res['data']['result']
                id = data[0]['id'];
                console.log(data)
                page_gren('update data', id, data['0'].name, data['0'].price, data['0'].mk_price);
                editpage();
            })
            .catch(err => {
                console.error(err);
            })
    });
}

function editpage() {

    $("#Update").click(function (e) {
        let data = {
            id: id,
            name: $("#name").val(),
            price: $("#price").val(),
            mk_price: $("#mk_price").val()
        }
        console.log(data)

        axios.post('http://localhost/SQLFinalPrj/Back/index.php?action=Update', Qs.stringify(data))
            .then(res => {
                alert("修改成功，將返回選擇畫面！");
                serachpage("Usel", "修改股票資訊");
            })
            .catch(err => {
                console.error(err);
            })
    });
}


export { updateAction }