//实现简单的爬虫

'use strict';

const request = require('request');
const cheerio = require('cheerio');
const message = require('./message');

const option = {
    url: 'http://127.0.0.1:8080/jQuerytest/index.html'
};

function callback(error,response,body) {
    if (!error && response.statusCode == 200){
        acquireData(body);
    } else {
        console.log('连接失败');
    }
}

request(option,callback);

function acquireData(data) {
    const $ = cheerio.load(data);
    let medias = $('.media').toArray();
    for (let item in medias){
        let media = medias[item];

        let title = $('h4',media).text();
        let content = $('p',media).text();
        let link = $('img',media).attr('src');

        message.addMessage(title,content,link);

    }

}
