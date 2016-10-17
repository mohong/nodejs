//path模块的使用

const path = require('path');
const temp = path.join(__dirname,'./media/ydyrx.lrc');

//path.basename(p[,ext]); 获取文件名
console.log(path.basename(temp));

//path.delimiter  获取不同操作系统中默认的路径分隔符,windows中是";"
console.log(path.delimiter);
//获取windows下系统的环境变量
console.log(process.env.PATH.split(path.delimiter));

//path.dirname(p)  获取文件目录的路径
console.log(path.dirname(temp));

//path.extname(p);  获取文件的扩展名，包含"."
console.log(path.extname(temp));

//path.sep   获取当前系统中默认的路径成员分隔符，windows中'\'  linux中'/'
console.log(path.sep);