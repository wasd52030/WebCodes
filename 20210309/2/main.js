$(document).ready(function () {
    $("#textbox1").keyup(function (e) { 
        let data={uname:$("#textbox1").val()};
        axios.post('/send',Qs.stringify(data))
        .then(res => {
            let out=res['data'];
            $("#lbl1").html(out);
        })
        .catch(err => {
            console.error(err); 
        })
    });
});