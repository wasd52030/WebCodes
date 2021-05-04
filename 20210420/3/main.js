let initial = '';
let MainCnt = 0;
let gametemp = [];
let btns = document.getElementsByClassName('btn');

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

document.addEventListener("DOMContentLoaded", function () {
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
    document.getElementById("main").innerHTML = initial;
    document.getElementById("info").innerHTML = "按開始以進行遊戲";
    document.getElementById("time").innerHTML = `${MainCnt} Sec`;

    //操作getElementsByXXX的東西時，如果有多項元件的話，需要用迴圈去取
    for (let i = 0; i < btns.length; i++) {
        btns[i].setAttribute('disabled', true);
    }

    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function () {
            document.getElementById(this.id).value = a[this.id];
            document.getElementById(this.id).setAttribute('disabled', true);
            gametemp.push(document.getElementById(this.id));
            if (gametemp.length == 2) {
                if (gametemp[0].value == gametemp[1].value) {
                    x += 1;
                    gametemp = []
                } else {
                    let timeout = setInterval(function () {
                        if (gametemp.length != 0) {
                            gametemp.forEach(element => {
                                element.value = "";
                                element.disabled = false;
                            });
                        }
                        gametemp = [];
                        clearInterval(timeout);
                    }, 150)
                }
            }
        }
    }

    //關於disable屬性，參考https://stackoverflow.com/questions/7526601/setattributedisabled-false-changes-editable-attribute-to-false
    document.getElementById("StartButton").onclick = function () {
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = false;
        }
        document.getElementById("info").innerHTML = "遊戲開始";
        let MainTimeCounter = setInterval(function () {
            MainCnt++;
            document.getElementById("time").innerHTML = `${MainCnt} Sec`;
            if (x == (a.length) / 2) {
                document.getElementById("info").innerHTML = "Game Finish";
                clearInterval(MainTimeCounter)
            }
        }, 1000);
    }
});