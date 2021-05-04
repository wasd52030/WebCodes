$(document).ready(function () {
    $("#btn1").click(function (e) {
        let check=new RegExp('^\\d+$');
        let Din=$("#input1").val();
        if(check.test(Din))
        {
            Din=parseInt(Din);
            let o=PrintTrangle(Din);
            $("#out").html(o);
        }
        else
            alert("輸入錯誤，只能入數字");
    });
});

function nCr(n,r)
{
    if(r==0||n==r)
        return 1;
    else
        return nCr(n-1,r)+nCr(n-1,r-1);
}

function PrintTrangle(n)
{
    $("#out").html("");
    let out="";
    for(let i=1;i<=n+1;i++)
    {
        for(let a=n;a>i;a--)
        {
            out+='&nbsp;';
        }
        for(let j=1;j<=i;j++)
        {
            out+=`&nbsp;${nCr(i-1,j-1)}&nbsp;`;
        }
        out+='<br>';
    }
    return out;
}