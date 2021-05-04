$(document).ready(function () {
    $("#button1").click(function (e) { 
        let x=$("#inputbox1").val();
        let y=$("#inputbox2").val();
        let opt=$("#select1").val();
        let z=0;
        
        let data={
            x:x,
            y:y,
            opt:opt
        }

        $.ajax({
            type: "POST",
            url: "./a.php",
            data: data,
            success: function (response){
                z=response;
                $("#inputbox3").val(z);
            }
        });
    });
});