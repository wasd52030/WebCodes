function sel_page()
{
    let searchpagestr = ''
    axios.get("http://localhost/20211025/2/Back/index.php?action=getUsers")
        .then(res => {
            switch (res['status']) {
                case 200:
                    let data = res['data']['result']
                    searchpagestr = `<table>`;
                    data.forEach(element => {
                        searchpagestr += "<tr>";
                        searchpagestr += "<td>" + element['id'] + "</td>";
                        searchpagestr += "<td>" + element['pwd'] + "</td>";
                        searchpagestr += "<td>" + element['email'] + "</td>";
                        searchpagestr += "<td>" + element['phone'] + "</td>";
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