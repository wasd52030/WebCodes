import { page_gren, pagestr } from './edit_page.js'

let id = 0;
function updateAction() {
    $("#Usel").click(function (e) {
        axios.post('http://localhost/SQLFinalPrj/Back/index.php?action=Select', Qs.stringify({ id: $("input[id='id']:checked").val() }))
            .then(res => {
                let data = res['data']['result']
                id = data[0]['id'];
                console.log(data)
                page_gren('update data', id, data['0'].name, data['0'].price, data['0'].mk_price);
                $("#result").html(pagestr);
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
                let d = res['data'];
                let updateresult = `status:${d['status']} message:${d['message']}`;
                $("#result").html(updateresult);
            })
            .catch(err => {
                console.error(err);
            })
    });
}


export { updateAction }