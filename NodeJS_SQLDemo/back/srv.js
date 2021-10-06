//nodemon srv.js ===> 啟動伺服器
//如沒有nodemon package，請以 npm install nodemon -g 安裝
let express = require('express');
let app = express();
let path = require('path')
let sql = require('./SQL-config');

//取得專案根目錄，以本專案來說，根目錄在主伺服器程式的上一層
//__dirname => 取得檔案所在之路徑
let maindirectory = path.join(__dirname, '../');
//設定伺服器根目錄
app.use('/', express.static(maindirectory));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//req.prams.xxxx -> 從path中的變數
//req.query.xxxx -> 從get中的?xxxx=中
//req.body.xxxx  -> 從Post中的變數

//實際連接mysql
sql.connect(function (err) {
    if (err) {
        console.log('SQL Server connect error');
        return;
    }
    console.log('SQL Server connect success');
})

app.get('/', function (req, res) {
    res.sendFile(maindirectory + '/index.htm');
});

app.get('/sel', function (req, res) {
    //SELECT * FROM x => 從名為x的資料『表』中取全部的資訊
    sql.query('SELECT * FROM x', function (err, rows) {
        if (err) console.log(err);
        res.json({ status: 200, message: "查詢成功", result: rows });
    })
});

app.post('/add', function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let addr = req.body.address;
    let birth = req.body.birthday;
    sql.query(`INSERT INTO x (id, name,addr,birth) VALUES (?, ?, ?, ?)`, [id, name, addr, birth], function (err) {
        if (err) {
            res.json({ status: 204, message: "新增失敗" });
        }
        else {
            res.json({ status: 200, message: "新增成功" });
        }
    })
});

app.post('/del', function (req, res) {
    let id = req.body.id;
    let sqlopt = `DELETE FROM x WHERE x.id = ?`;
    sql.query(sqlopt, [id], function (err) {
        if (err) {
            res.json({ status: 204, message: "刪除失敗" });
        }
        else {
            res.json({ status: 200, message: "刪除成功" });
        }
    })
});

app.post('/search', function (req, res) {
    let id = req.body.id;
    let sqlopt = `SELECT * FROM x WHERE ID= ?`;
    sql.query(sqlopt, [id], function (err, row) {
        if (err) {
            res.json({ status: 204, message: "查詢失敗" });
        }
        else {
            res.json({ status: 200, message: "查詢成功", data: row });
        }
    })
});

app.post('/edit', function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let addr = req.body.address;
    let birth = req.body.birthday;
    let sqlopt = `UPDATE x SET name=?,addr=?,birth=? WHERE x.id = ?`;
    sql.query(sqlopt, [name, addr, birth, id], function (err) {
        if (err) {
            res.json({ status: 204, message: "更新失敗" });
        }
        else {
            res.json({ status: 200, message: "更新成功" });
        }
    })
});

app.listen(2300, function () {
    console.log('Server is running in localhost:2300');
});