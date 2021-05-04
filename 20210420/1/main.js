$(document).ready(function () {
    $('#btn1').click(function (e) { 
        let id=$("#id").val();
        let name=$("#name").val();
        let addr=$("#addr").val();
        let birth=$("#birth").val();
        let sqltime=new Date(birth)
        let data={
            id:id,
            name:name,
            addr:addr,
            birth: `${sqltime.getFullYear()}-${sqltime.getMonth()+1}-${sqltime.getDate()}`
        };

        $.ajax({
            type: "POST",
            url: "./k.php",
            data: data,
            success: function (response) {
                console.log(response);
            }
        });
    });
});