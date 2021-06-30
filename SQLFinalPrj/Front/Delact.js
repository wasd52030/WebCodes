import { serachpage } from "./SearchList.js";

function delAction() {
    $("#Del").click(function (e) {
        console.log(Qs.stringify({ id: $("input[id='id']:checked").val() }))
        axios.post('http://localhost/SQLFinalPrj/Back/index.php?action=Delete', Qs.stringify({ id: $("input[id='id']:checked").val() }))
            .then(res => {
                serachpage("Del", "刪除股票");
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { delAction }