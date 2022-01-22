
export default function EditClass(btn_text, id = "", name = "", Introduction = "", credit = 0) {
    let page = ""
    page = `<table>`;
    page += `<tr><td></td><td><input type="hidden" id="teacher" value=${id}></td></tr>`;
    page += `<tr><td>課程名稱: </td><td><input id="name" value="${name}"></td></tr>`;
    page += `<tr><td>課程介紹: </td><td><textarea id="Introduction" rows="6" cols="40">${Introduction}</textarea></td></tr>`;
    page += `<tr><td>每星期</td><td><select id="weekday"></select></td></tr>`
    page += `
            <tr>
                <td>節次</td>
                <td>
                    <select class="lesson" id="from"></select>
                    -
                    <select class="lesson" id="to"></select>
                </td>
            </tr>
    `
    page += `<tr><td>學分數: </td><td><input disabled="disabled" id="credit" value=${credit}></td></tr>`;
    page += `</table>`
    page += `<button id="${btn_text == 'update' ? "Update" : "addpg"}" style="margin: 5px 0 0 0;">${btn_text == 'update' ? "修改" : "新增"}</button>`

    $("#result").html(page);

    for (let i = 1; i < 6; i++) {
        $("#weekday").append(
            $('<option>', {
                value: i,
                text: i
            })
        );
    }

    for (let i = 1; i < 9; i++) {
        $(".lesson").append(
            $('<option>', {
                value: i,
                text: i
            })
        );
    }
}



