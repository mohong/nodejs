/**
 * 老版本的项目入口文件，属于历史遗漏问题
 * 新的入口文件是/bin/www
 * Created by mohong on 2016/10/30.
 */

var express = require('./config/express');
var mongodb = require('./config/mongoose');

var db = mongodb();
var app = express();

module.exports = app;