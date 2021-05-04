//nodemon srv.js ===> 啟動伺服器
//如沒有nodemon package，請以 npm install nodemon -g 安裝
let express=require('express')
let app=express();


app.use('/',express.static(__dirname))


app.get('/',function (req,res){
    res.sendFile(`${__dirname}/index.htm`);
})

let server=app.listen(5000,function (){
    console.log('Node server is running...');
})