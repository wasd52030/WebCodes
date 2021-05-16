function sel_page() {
    $.ajax({
        type: "GET",
        url: "/sel",
        success: function (response) {
            let data = response['result'];
            let sel_str = `<table border='1'>`;
            sel_str += "<tr><td>id</td><td>name</td><td>address</td><td>birthday</td></tr>"
            data.forEach(element => {
                sel_str += "<tr>";
                sel_str += "<td>" + element['id'] + "</td>";
                sel_str += "<td>" + element['name'] + "</td>";
                sel_str += "<td>" + element['addr'] + "</td>";
                //把伺服器傳回來的時間字串轉成javascript的日期物件，方便取所需的值
                let d = new Date(element['birth']);
                //dateObject.getMonth() => dateObject 的月份字段，傳回值是 0（一月）到 11（十二月） 之間的一个整数。
                let fullmonth = (d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
                let fulldate = (d.getDate() + 1) < 10 ? `0${d.getDate()}` : d.getDate();
                sel_str += "<td>" + `${d.getFullYear()}/${fullmonth}/${fulldate}` + "</td>";
                sel_str += "</tr>";
            });
            sel_str += "</table>";
            $("#result").html(sel_str);
        }
    });
}

export { sel_page };