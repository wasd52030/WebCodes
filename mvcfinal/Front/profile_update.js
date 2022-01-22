export default function ProfileEdit(id = "", password = "", name = "", email = "", phone = "") {
    let page = ""
    page = `<table>`
    page += `<tr><td></td><td><input type="hidden" id="id" value=${id}></td></tr>`
    page += `<tr><td>密碼: </td><td><input type="password" id="password" value=${password}></td></tr>`
    page += `<tr><td>姓名: </td><td><input type="text" id="name" value=${name}></td></tr>`
    page += `<tr><td>email: </td><td><input id="email" value=${email}></td></tr>`
    page += `<tr><td>電話: &nbsp</td><td><input id="phone" value=${phone}></td></tr>`
    page += `</table>`
    page += `<button id="Update" style="margin: 5px 0 0 0">送出</button>`

    $("#result").html(page);
}

