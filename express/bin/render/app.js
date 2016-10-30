/**
 * 使用ejs模板引擎
 * Created by mohong on 2016/10/30.
 */

var express = require('express');
var app = express();

app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.get('/',function (req,res) {
    res.render('home.ejs',{name:'mohong'});
});

app.listen(3000);
console.log('server start')