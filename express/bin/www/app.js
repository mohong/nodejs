/**
 * Created by mohong on 2016/10/30.
 */

var express = require('express');
var app = express();

app.get('/hello',function (req,res) {
    res.send('hello this is express');
});
app.listen(3000);
console.log('server already start');
