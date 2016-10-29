//消息发布
var client = require('./client');

client.publish('testPublish','this message come from redis_pub.js');