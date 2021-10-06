$(document).ready(function () {
    $('#btn1').click(function (e) {
        let w1 = $("#w1").val();
        let h1 = $("#h1").val();
        let w2 = $("#w2").val();
        let h2 = $("#h2").val();

        data = {
            w1: w1,
            h1: h1,
            w2: w2,
            h2: h2
        }

        axios.post("http://localhost/20210927/4/main.php",Qs.stringify(data))
        .then(res => {
            data=res.data
            console.log(data)
            $("#result").html(`長方形1： 面積${data["area1"]}<br>長方形2： 面積${data["area2"]}<br>`);
        })
        .catch(err => {
            console.error(err); 
        })

        
    });
});