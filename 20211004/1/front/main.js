$(document).ready(function () {
    $('#btn1').click(function (e) {
        let w = $("#w1").val();
        let h = $("#h1").val();
        let r = $("#r").val();
        let p = $("#p").val();

        data = {
            w1: w,
            h1: h,
            r: r,
            p: p
        }

        axios.post("http://localhost/20211004/1/back/main.php", Qs.stringify(data))
            .then(res => {
                data = res.data
                console.log(data)
                $("#result").html(
                    `長方形： <br>
                    長：${data["Rectangle"]["width"]} 
                    寬：${data["Rectangle"]["height"]} <br>
                    周長：${data["Rectangle"]["length"]} 
                    面積：${data["Rectangle"]["area"]}
                    <br><br>

                    圓： <br>
                    半徑：${data["Circle"]["radius"]} 
                    倍率：${data["Circle"]["p"]} <br>
                    面積：${data["Circle"]["area"]} 
                    邊長：${data["Circle"]["Circumference"]} 
                `
                );
            })
            .catch(err => {
                console.error(err);
            })


    });
});