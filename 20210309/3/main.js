$(document).ready(function () {
    $("#textbox1").keyup(function (e) { 
        let data={uname:$("#textbox1").val()};
        $.ajax({
            type: "GET",
            url: "/send",
            dataType: 'json',
            data: data,
            success: function (response){
                $("#lbl1").html(response.data); //直接對傳回來的json作取值
            },
            error:function () {
                alert('error');
            }
        });
    });
});