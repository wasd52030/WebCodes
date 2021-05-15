let mysql=require('mysql');

//mysql連線資訊設定
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"n" //注意:要填資料『庫』的名字
})

//實際連接mysql
con.connect(function(err){
    if(err)
    {
        console.log('connect error');
        return;
    }
    console.log('connect success');
})

module.exports=con;
