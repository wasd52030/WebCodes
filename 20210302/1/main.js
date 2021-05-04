$(document).ready(function () {
    let b1flag=true;
    let b2flag=true;

    $("#btn1").click(function (e) { 
        b1flag=~b1flag;
        $("#text1").load("k.txt");
        if (b1flag==true) 
        {
                $("#text1").show();
        }
        else 
        {
            $("#text1").hide();
        }
    });

    $("#btn2").click(function (e) { 
        b2flag=~b2flag;

        if(b2flag==true)
        {
            $("#lk1").show();
        }
        else
        {
            $("#lk1").hide();
        }
        
    });
});