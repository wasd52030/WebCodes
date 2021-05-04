//nodemon srv.js ===> 啟動伺服器
//如沒有nodemon package，請以 npm install nodemon -g 安裝
let express=require('express');
let app=express();

app.use('/',express.static(__dirname))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//res.prams.xxxx -> 從path中的變數
//res.query.xxxx -> 從get中的?xxxx=中
//res.body.xxxx  -> 從Post中的變數

app.get('/',function (req,res){
    res.sendFile(`${__dirname}/index.htm`);
});

app.post('/send',function (req,res){
    res.send(`${req.body.uname}，你好`);
});

let server=app.listen(2300,function (){
    console.log('Server is running in localhost:2300');
});