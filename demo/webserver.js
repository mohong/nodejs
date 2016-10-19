//这是一个服务器，并且还可以在客户端访问

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

//创建http服务器
http.createServer((req,res)=>{
    //获取客户端请求路径
    let pathname = url.parse(req.url,true).pathname;
    console.log(pathname);
    console.log(req.method);

    //根据不同的pathname调用不同的处理逻辑
    switch (pathname) {
        case '/movie':
            resIndex(res);
            break;
        case '/image':
            resImage(res);
            break;
        default:
            resDefault(res);
            break;
    }

}).listen(8888,(error)=>{
    if (error){
        throw error
    } else {
        console.log('成功打开服务，地址： 127.0.0.1:8888');
    }
});

//响应html
function resIndex(res) {
    let readPath = path.join(__dirname,'./html/index.html');
    let indexPage = fs.readFileSync(readPath);  //读取文件
    res.writeHead(200,{'content-Ttpe':'text/html'});
    res.end(indexPage);
}
//响应图片
function resImage(res) {
    let readPath = path.join(__dirname,'./img/nkns.jpg');
    let indexPage = fs.readFileSync(readPath);
    res.writeHead(200,{'content-Type':'image/jpg'});
    res.end(indexPage);
}

function resDefault(res) {
    res.writeHead(404,{'content-Type':'text/plain'});
    res.end('can not find source')
}