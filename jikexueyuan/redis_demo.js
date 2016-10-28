var client = require('./client');

//存储数据
client.set('sex','male');
client.set('obj','{name:wang,age:22}');
//得到数据
client.get('sex',function(err,data){
	console.log('"sex"的值为：'+data);
});
client.get('obj',function(err,data){
	console.log('"obj"的值为：'+data);
});