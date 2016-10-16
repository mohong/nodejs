/**
 * Created by mohong on 2016/10/16.
 */
/*
 创建一个http服务
 */
'use strict';

const http = require('http');

let count = 0;

const server = http.createServer((req,res) => {
    //此回调会在任何用户请求时触发
    res.write('你是第'+(count++)+'位用户');
    res.end();
});

server.listen(2080,(error) => {
    if(error){
        throw error;
    }
    console.log('成功启动http服务器，本机访问：localhost:2080');
});