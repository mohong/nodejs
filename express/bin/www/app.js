/**
 * Created by mohong on 2016/10/30.
 */

var express = require('express');
var app = express();

app.get('/hello',function (req,res) {
    res.send('hello this is express');
});

app.get('/category',function (req,res) {
    res.status(200);
    res.json({
        python: 20,  //用假数据代替数据库
        nodejs: 10,
        others: 12
    });
});

app.get('/questions',function (req,res) {
    res.status(200);
    res.json([
        {
            id: 1,
            title: 't1',
            asker: 'mohong',
            course: 'nodejs',
            'last-replay': Date.now(),
            replay: 1
        },
        {
            id: 2,
            title: 't2',
            asker: 'mohong2',
            course: 'nodejs2',
            'last-replay': Date.now(),
            replay: 2
        }
    ]);
});


app.listen(3000);
console.log('server already start');
