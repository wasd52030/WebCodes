function delAction() {
    $("#Del").click(function (e) {
        console.log(Qs.stringify({ id: $("input[id='id']:checked").val() }))
        axios.post('http://localhost/SQLFinalPrj/Back/index.php?action=Delete', Qs.stringify({ id: $("input[id='id']:checked").val() }))
            .then(res => {
                let d = res['data'];
                let resultmsg = `status:${d['status']} message:${d['message']}`;
                $("#result").html(resultmsg);
            })
            .catch(err => {
                console.error(err);
            })
    });
}

export { delAction }