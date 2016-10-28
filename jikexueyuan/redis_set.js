var client = require('./client');

client.sadd('testSet','a');
client.sadd('testSet','b');
client.sadd('testSet','c');
client.sadd('testSet','d');
client.sadd('testSet','e');

client.smembers('testSet',function(err,data){
	console.log('testSet集合中smembers返回的值为：'+data);
});