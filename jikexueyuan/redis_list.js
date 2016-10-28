var client = require('./client.js');
client.rpush('testList', 'a');   //rpush 从右边插入
client.rpush('testList', 'b');
client.rpush('testList', 'c');
client.lpush('testList', '1');	 //lpush 从左边插入

client.lpop('testList',function(err,data){   //lpop 从左边推出一个元素
	console.log('推出栈的元素为'+data);		 //rpop 从右边推出一个元素
})	

client.lrange('testList', 0, -1, function(err,data){
	console.log('testList列表中的值为：'+data);
});