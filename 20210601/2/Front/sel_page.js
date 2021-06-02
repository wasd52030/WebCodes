function sel_page()
{
    let searchpagestr = ''
    axios.get("http://localhost/20210601/2/Back/index.php?action=Select")
        .then(res => {
            console.log(res)
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    searchpagestr = `<table border='1'>`;
                    searchpagestr += "<tr><td></td><td>name</td><td>address</td><td>birthday</td></tr>"
                    data.forEach(element => {
                        searchpagestr += "<tr>";
                        //radio button 的name參數用來告訴瀏覽器同名的選項為一組，使得radio button一組資料只能取一的特性啟動
                        //radio button 的value參數通常會傳回後端處理
                        searchpagestr += "<td>" + element['id'] + "</td>";
                        searchpagestr += "<td>" + element['name'] + "</td>";
                        searchpagestr += "<td>" + element['addr'] + "</td>";
                        //把伺服器傳回來的時間字串轉成javascript的日期物件，方便取所需的值
                        let d = new Date(element['birth']);
                        //dateObject.getMonth() => dateObject 的月份字段，傳回值是 0（一月）到 11（十二月） 之間的一个整数。
                        let fullmonth = (d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
                        let fulldate = (d.getDate()) < 10 ? `0${d.getDate()}` : d.getDate();
                        searchpagestr += "<td>" + `${d.getFullYear()}/${fullmonth}/${fulldate}` + "</td>";
                        searchpagestr += "</tr>";
                    });
                    searchpagestr += "</table>";
                    $("#result").html(searchpagestr);
                    break;
                default:
                    $("#result").html(res['message']);
                    break;
            }
        })
        .catch(err => {
            console.error(err);
        })
}

export {sel_page};