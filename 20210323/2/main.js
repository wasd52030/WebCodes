$(document).ready(function () {
    $("#button1").click(function (e) { 
        let a=$("#a").val();
        let b=$("#b").val();
        let data={a:a,b:b};

        $.ajax({
            type: "POST",
            url: "./a.php",
            data: data,
            success: function (response) {
                let res=JSON.parse(response);
                $("#gcd").html(res['gcd']);
            }
        });
    });
});