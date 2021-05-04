$(document).ready(function () {
    $("#textbox1").keyup(function (e) { 
        $.ajax({
            type: "GET",
            url: 'Hello.php',
            
            data: {
                "name":$("#textbox1").val()
            },
            success: function (MsgToJson) {
                let out=JSON.parse(MsgToJson);
                $("#lbl1").html(out);
            },
            error:function () {
                alert('error');
            }
        });
    });
});