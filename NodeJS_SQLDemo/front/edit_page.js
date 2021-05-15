let pagestr=""
function page_gren(btn_text,id=0,name="",address="",birthday="") 
{
    pagestr=`<table>`;

    if (btn_text=='update data') 
    {
        pagestr+=`<tr><td></td><td><input type="hidden" id="id" value=${id}></td></tr>`;
    } 
    else
    {
        pagestr+=`<tr><td>id: </td><td><input id="id"></td></tr>`;
    }

    pagestr+=`<tr><td>name: </td><td><input id="name" value=${name}></td></tr>`;
    pagestr+=`<tr><td>address: </td><td><input id="address" value=${address}></td></tr>`;
    pagestr+=`<tr><td>birthday: &nbsp;</td><td><input type="date" id="birthday" value=${birthday}></td></tr>`;
    pagestr+=`</table>`
    pagestr+=`<button id="${btn_text=='update data' ? "update": "addpg"}" style="margin: 5px 0 0 0;">${btn_text}</button>`
}

export {page_gren,pagestr};