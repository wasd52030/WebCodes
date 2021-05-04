$(document).ready(function () {
    $("#button1").click(function (e) { 
        let x=$("#inputbox1").val();
        let y=$("#inputbox2").val();
        let opt=$("#select1").val();
        let z=0;
        
        switch (opt)
         {
            case "+":
                z=parseFloat(x)+parseFloat(y);
                break;
            case "-":
                z=parseFloat(x)-parseFloat(y);
                break;
            case "*":
                z=parseFloat(x)*parseFloat(y);
                break;
            case "/":
                z=parseFloat(x)/parseFloat(y);
                break;
            default:
                break;
        }

        $("#inputbox3").val(z);
    });
});