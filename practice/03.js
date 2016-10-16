//写一个require函数_$require
'use strict';

//定义$require函数
function $require(id) {
    //1、先找到文件，如果文件不存在 报错：can not find module './module/mud2.js'
    //2、读取文件内容，内容是JS代码
    const fs = require('fs');  //文件系统模块
    const path = require('path');  //操作路径的模块
    const filename = path.join(__dirname,id);
    const dirname = path.dirname(filename);
    let code = fs.readFileSync(filename,'utf8');  //所有的文件操作必须是物理路径（绝对路径）操作
    //3、执行文件，所要执行的代码
    let module = {id:filename,exports:{}};
    let exports = module.exports;
    code = `
    (function($require,module,exports,__dirname,__filename){
        ${code}
    })($require,module,exports,dirname,filename);
    `;
    eval(code);
    //4、返回值
    return module.exports;
}


//测试$require函数
var module1 = $require('./module/module1.js');
module1.say('hello node');