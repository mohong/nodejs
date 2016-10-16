//验证载入模块缓存机制

//验证缓存的存在
/*
setInterval(function () {
    var date = require('./module/module2.js');
    console.log(date.getTime());
},1000);
*/

//删除缓存,一般不会这么干，常见的是在模块中暴露一个行为
setInterval(function () {
    Object.keys(require.cache).forEach((key) => {
        delete require.cache[key];
    });
    var date = require('./module/module2');
    console.log(date.getTime());
},1000);