//发送http获取网页内容
'use strict';

const request = require('request');
const cheerio = require('cheerio');
const option = {
    url: 'http://127.0.0.1:8080/jQuerytest/index.html',
    headers: {
        'User-Agent': 'request'
    }
};

function callback(error,response,body) {
    if (!error && response.statusCode == 200){
      let $ = cheerio.load(body);
        let lis = $('li');
        console.log(lis);
    }
}

request(option,callback);
