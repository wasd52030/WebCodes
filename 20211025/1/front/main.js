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

        axios.post("http://localhost/20211025/1/back/main.php?action=getArea", Qs.stringify(data))
            .then(res => {
                console.log(res)
                data = res.data['result']
                $("#result").html(
                    `
                        長方形： <br>
                        面積：${data[0]["Rectangle"]}
                        <br><br>

                        圓： <br>
                        面積：${data[1]["Circle"]} 
                    `
                );
            })
            .catch(err => {
                console.error(err);
            })


    });
});