//同步调用与异步调用

const fs = require('fs');
const path = require('path');


console.time('sync');
try {
    var data = fs.readFileSync(path.join(__dirname,'../README.md'),'utf8');
    //console.log(data);
} catch (error) {
    throw error;
}
console.timeEnd('sync');


console.time('async');
fs.readFile(path.join(__dirname,'../README.md'),'utf8',(error,data) => {
    if (error){
        throw error;
    }
    //console.log(data);
});
console.timeEnd('async');



