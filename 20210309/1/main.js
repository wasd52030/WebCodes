$(document).ready(function () {
    $("#textbox1").keyup(function (e) { 
        let data={'name':$("#textbox1").val()};
        axios.post("Hello.php",Qs.stringify(data))
        .then(res => {
            console.log(res);
            let x=res['data'];
            $("#lbl1").html(x);
        })
        .catch(err => {
            console.error(err); 
        })
    });
});