/**
 * 根据当前系统的环境变量读取相应的配置文件
 * Created by mohong on 2016/10/29.
 */

var config = null;

if (process && process.env && process.env.NODE_ENV){
    config = require('./env/' + process.env.NODE_ENV + '.js');
} else {
    config = require('./env/development.js');
}

module.exports = config;