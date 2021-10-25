function delAction() {
    $("#Del").click(function (e) {
        axios.post('http://localhost/20211025/2/Back/index.php?action=removeUser', Qs.stringify({ id: $("input[id='id']:checked").val() }))
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