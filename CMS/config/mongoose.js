/**
 * mongoose配置
 * Created by mohong on 2016/10/31.
 */

var mongoose = require('mongoose');
var config = require('./config');

module.exports = function () {
    //连接mongodb数据库
    var db = mongoose.connect(config.mongodb);
    //导入models
    require('../app/models/news.server.model');
    return db;
};