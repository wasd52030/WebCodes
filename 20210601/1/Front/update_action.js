import { page_gren, pagestr } from './edit_page.js'

let id = 0;
function updateAction() {
    $("#Usel").click(function (e) {
        axios.post('/20210601/1/Back/Select.php', Qs.stringify({ id: $("input[id='id']:checked").val() }))
            .then(res => {
                let data = res['data']['result']
                let d = new Date(data[0]['birth']);
                let fullmonth = (d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
                let fulldate = (d.getDate() + 1) < 10 ? `0${d.getDate() + 1}` : d.getDate();
                let sqldate = `${d.getFullYear()}-${fullmonth}-${fulldate}`;
                id = data[0]['id'];
                page_gren('update data', id, data['0'].name, data['0'].addr, sqldate);
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
            address: $("#address").val(),
            birthday: $("#birthday").val()
        }
        console.log(data)

        axios.post('/20210601/1/Back/Update.php', Qs.stringify(data))
            .then(res => {
                let d = res['data'];
                console.log(res)
                let updateresult = `status:${d['status']} message:${d['message']}`;
                $("#result").html(updateresult);
            })
            .catch(err => {
                console.error(err);
            })
    });
}


export { updateAction }