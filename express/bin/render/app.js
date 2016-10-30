/**
 * 使用ejs模板引擎
 * Created by mohong on 2016/10/30.
 */

var express = require('express');
var app = express();

app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use(express.static(__dirname));

app.get('/',function (req,res) {
    res.render('home.ejs',{name:'mohong'});
});

app.get('/request/:id',function (req,res) {
    var locals = {name: 'mohong', id: req.params['id']};
    res.render('home.ejs',locals);
});

app.listen(3001);
console.log('server start')