$(document).ready(function () {
    $("#button1").click(function (e) { 
        let c=$("#chinese").val();
        let eng=$("#english").val();
        let m=$("#math").val();
        let data={chi:c, eng:eng,math:m};

        if ((c.match("^((\\d{1})|([1-9]{1}\\d{1})|(100))$")&&eng.match("^((\\d{1})|([1-9]{1}\\d{1})|(100))$")&&m.match("^((\\d{1})|([1-9]{1}\\d{1})|(100))$")))
        {
            $.ajax({
                type: "POST",
                url: "./a.php",
                data: data,
                success: function (response) {
                    let x=response;
                    let color=x>=60?"black":"red";
                    $("#avg").css("color", color);
                    $("#avg").html(x);
                }
            });
        }
        else
        {
            alert("輸入有誤，請重新輸入");
        }
    });
});