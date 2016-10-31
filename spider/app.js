var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio')


app.get('/', function(req, res){
  request('http://www.jikexueyuan.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
     var $ = cheerio.load(body);
      res.send('hello world');
    }
  })
});

app.listen(3000);