/**
 * lodash的基本使用
 * 一个操作数据的js库
 * Created by mohong on 2016/12/18.
 */

var _ = require('lodash');

var user1 = {
	name: 'zhangsan',
	height: 180,
	weight: 120
};

var user2 = {
	name: 'lisi',
	height: 170,
	weight: 130
};

// find()方法的使用
var users = [user1, user2];

var result = _.find(users, {name: 'zhangsan'});

console.log(result);
