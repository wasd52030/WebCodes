$(document).ready(function () {
    $("#textbox1").keyup(function (e) { 
        $.ajax({
            type: "GET",
            url: 'Hello.php',
            
            data: {
                "name":$("#textbox1").val()
            },
            success: function (response) {
                $("#lbl1").text(response);
            },
            error:function () {
                alert('error');
            }
        });
    });
});