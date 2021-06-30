import { page_gren } from "./EditPage.js";

function addAction() {
    page_gren("新增股票");

    $("#addpg").click(function (e) {
        let data = {
            id: $("#id").val(),
            name: $("#name").val(),
            price: parseFloat($("#price").val()).toFixed(2),
            mk_price: parseFloat($("#mk_price").val()).toFixed(2)
        }

        axios.post("http://localhost/SQLFinalPrj/Back/index.php?action=Insert", Qs.stringify(data))
            .then(res => {
                alert("新增成功！");
                addAction();
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { addAction }