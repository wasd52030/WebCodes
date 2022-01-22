function JsonToFromData(json) {
    let from = new FormData()
    Object.keys(json).forEach(key => from.append(key, json[key]))
    return from
}


$(document).ready(function () {
    $("#upload").click(function (e) {
        let data = {
            data: $('#file').prop('files')[0],
            a: 1
        }

        let f = JsonToFromData(data)

        axios.post("http://localhost/ajax_upload/FileUpload.php", f, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            })
    });

    $("#getfilelist").click(function (e) {

        axios.post("http://localhost/ajax_upload/FileList.php")
            .then(res => {
                if (res["data"]["status"] == 200) {
                    let page = `<ul id="f">`
                    res["data"]["result"].forEach(element => {
                        page += `<li>
                                <a href="http://localhost/ajax_upload/GetFile.php?filename=${element["filename"]}">
                                    ${element["filename"]}
                                </a>
                                <button style="margin:0 0 0 15px;" class="delete" id="${element["filename"]}">刪除</button>
                          </li>`
                    })
                    page += "</ul>"
                    $("#filelist").html(page);
                }

                $("li .delete").on("click", function () {
                    let data = JsonToFromData({ filename: this.id })
                    axios.post("http://localhost/ajax_upload/DelFile.php", data)
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            console.error(err);
                        })
                });
            })
            .catch(err => {
                console.error(err);
            })
    });
});

