$(document).ready(function () {
    let selpage='';
    selpage += '<table border=1>'
    $.ajax({
        type: "GET",
        url: "./Select.php",
        success: function (response) {
            let res = JSON.parse(response);
            let data = res['data'];
            selpage += `<tr><td></td><td>name</td><td>address</td><td>birthday</td></tr>`;
            data.forEach(element => {
                selpage += `<tr><td><input type="radio" id="id" name="id" value=${element['id']}></td>`
                selpage += `<td>${element['name']}</td>`;
                selpage += `<td>${element['addr']}</td>`;
                selpage += `<td>${element['birth']}</td>`;
            });
            selpage += '</tr></table>';
            selpage += `<button id='del'>刪除</button>`;
            $("#main").html(selpage);

            $("#del").click(function (e) {
                let id=$(`input[type='radio']:checked`).val();
                $.ajax({
                    type: "GET",
                    url: "./Delete.php",
                    data: {
                        id:id
                    },
                    success: function (response) {
                        let res=JSON.parse(response);
                        $("#info").html(`${res['status']}\n${res['message']}`);
                    }
                });
            });

        }
    });
    

    
});

