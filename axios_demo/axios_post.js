let axios = require('axios');
let qs = require('qs');

//axios預設的傳送數據格式跟PHP的不一樣
//要先透過qs.stringify(data)轉換
let data = {
    id: 1352135
}
axios.post('http://localhost/SQLDemo/Back/Search.php', qs.stringify(data))
    .then(res => {
        let data = res['data'];
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    })