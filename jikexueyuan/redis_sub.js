//消息订阅
var client = require('./client');

client.subscribe('testPublish');
//监听
client.on('message',function(chanel,msg){
	console.log('客户端监听的频道为'+chanel+',内容为：'+msg);
});