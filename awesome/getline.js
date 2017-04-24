var fs = require('fs');
var path = require('path');

var sum = 0;
// 用来统计代码行数的脚本
travel('./', getLineCount);

// 读取文件行数
function getLineCount(dir) {
	var extendsStr = dir.substr(dir.lastIndexOf('.') + 1);
	if (extendsStr == 'js' || extendsStr == 'vue' || extendsStr == 'json') {
		fs.readFile(dir, function (err, data) {
		   if (err) {
		       return console.error(err);
		   }
		   var count = 0;
		   for (var index in data) {
		   		if (data[index] == 10) {
		   			count++;
		   		}
		   }
		   sum += (count+1);
		   console.log(dir, count+1, sum);
		});
	}
}
// 遍历文件夹
function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
    	if (fs.statSync(pathname).isDirectory()) {
        	travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}