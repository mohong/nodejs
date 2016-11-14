var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');


app.get('/', function(req, res){
  request('http://arthas.com.cn', function (error, response, body) {
    if (!error && response.statusCode == 200) {
     var $ = cheerio.load(body);
        console.log(body);
      res.send('hello world');
    }
  })
});

app.listen(4000);
console.log('server start');