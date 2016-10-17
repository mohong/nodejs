//发送http获取网页内容

const request = require('request');
const option = {
    url: 'http://127.0.0.1:8080/jQuerytest/index.html',
    headers: {
        'User-Agent': 'request'
    }
};

function callback(error,response,body) {
    if (!error && response.statusCode == 200){
        console.log(body);
    }
}

request(option,callback);


