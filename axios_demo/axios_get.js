let axios = require('axios');

axios.get('http://localhost/SQLDemo/Back/Select.php')
    .then(res => {
        let data = res['data'];
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    })