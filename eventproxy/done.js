/**
 * done方法替换匿名函数
 * Created by mohong on 2016/11/14.
 */
var fs = require('fs');
var EventProxy = require('eventproxy');

var ep = new EventProxy();

ep.after('read_file',3,function (contents) {
    console.log(contents.join());
});

fs.readFile('./file1.txt','utf8',ep.done('read_file'));
fs.readFile('./file2.txt','utf8',ep.done('read_file'));
fs.readFile('./file3.txt','utf8',ep.done('read_file'));