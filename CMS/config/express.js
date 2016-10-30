/**
 * 服务器实例
 * Created by mohong on 2016/10/30.
 */

var express = require('express');
var bodyParser = require('body-parser');

module.exports = function () {
    console.log('init express......');
    var app = express();
    app.use(bodyParser.json());
    return app;
}