/**
 * after方法
 * Created by mohong on 2016/11/14.
 */
var fs = require('fs');
var EventProxy = require('eventproxy');

var ep = new EventProxy();


ep.after('read_file',3,function (contents) {
    console.log(contents.join());
})

fs.readFile('./file1.txt','utf8',function (err,content1) {
    ep.emit('read_file',content1);
});
fs.readFile('./file2.txt','utf8',function (err,content2) {
    ep.emit('read_file',content2);
});
fs.readFile('./file3.txt','utf8',function (err,content3) {
    ep.emit('read_file',content3);
});

