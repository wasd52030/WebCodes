let initial = '';
let MainCnt = 0;
let gametemp = [];

function numlistinit() {
    let g = [];
    for (let i = 0; i < 18; i++) {
        let n = Math.floor(Math.random() * 10);
        g.push(n);
        g.push(n);
    }
    g.sort(function () { return Math.random() > 0.5 ? -1 : 1; })  //打亂陣列
    return g;
}

$(document).ready(function () {
    let n = 0, x = 0;
    let a = numlistinit();
    initial += `<div class="container">`;
    for (let i = 0; i < 6; i++) {
        initial += `<div class="row align-items-center">`;
        for (let j = 0; j < 6; j++) {
            initial += `<div class="col"><span><input type="button" value="" id="${n}" class="btn btn-primary"></span></div>`;
            n++;
        }
        initial += `</div>`;
    }
    initial += `</div>`;
    $("#info").html("按開始以進行遊戲");
    $("#main").html(initial); //初始化所有按鈕
    $('.btn').attr('disabled', true); //初始化所有按鈕狀態為不可按，當開始後才會啟動
    $("#time").html(`${MainCnt} Sec`);

    $(".btn").click(function (e) {

        $(`#${this.id}`).val(a[this.id]);
        $(`#${this.id}`).attr('disabled', true);
        console.log(x);
        gametemp.push($(`#${this.id}`))

        if (gametemp.length == 2) {
            if (($(gametemp[0]).val() == $(gametemp[1]).val())) {
                x += 1;
                gametemp = [];
            } else {
                let timeout = setInterval(function () {
                    if (gametemp.length != 0) {
                        gametemp.forEach(element => {
                            $(element).val("");
                            $(element).attr('disabled', false);
                        });
                    }
                    gametemp = [];
                    clearInterval(timeout)
                }, 150)
            }
        }
    });

    $("#StartButton").click(function (e) {
        $(`.btn`).attr('disabled', false);
        $("#info").html("遊戲開始");
        let MainTimeCounter = setInterval(function () {
            MainCnt++;
            $("#time").html(`${MainCnt} Sec`);
            if (x == (a.length) / 2) {
                $("#info").html("Game Finish");
                clearInterval(MainTimeCounter)
            }
        }, 1000)
    });
});