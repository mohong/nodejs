/**
 * 新闻-服务端-模型
 * Created by mohong on 2016/10/31.
 */

var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now
    }
});

var News = mongoose.model('News',NewsSchema);