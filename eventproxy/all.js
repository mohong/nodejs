/**
 * eventProxy模块实例
 * Created by mohong on 2016/11/14.
 */

var EventProxy = require('eventproxy');
var fs = require('fs');

var ep = new EventProxy();

//all方法监听所有事件
ep.all(['read_file1','read_file2','read_file3'],function (content1,content2,content3) {
    console.log(content1+content2+content3);
});


fs.readFile('./file1.txt','utf8',function (err,content1) {
    ep.emit('read_file1',content1);  //发射事件，名称为read_file1
});
fs.readFile('./file2.txt','utf8',function (err,content2) {
    ep.emit('read_file2',content2);
});
fs.readFile('./file3.txt','utf8',function (err,content3) {
    ep.emit('read_file3',content3);
});
