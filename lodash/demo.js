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

// var result = _.find(users, {name: 'zhangsan'});

// findIndex() 返回查找到的对象对应的索引值

// pluck() 提取数组每个元素的指定的属性，组成新的数组

//v4.0不支持，注意版本问题
// var result = _.pluck(users, 'name');

/*
var result = _.map(users, function (user) {
	return {
		name: user.name,
		height: user.height,
		age: 20
	}
});
*/
// 移除符合条件的元素，组成数组返回
// var result = _.remove(users, {name: 'zhangsan'});

//根据属性去重
//var result = _.uniq(users, 'name');

//链式调用
var result = _.chain(users).filter({name:'zhangsan'}).uniq('name').value();

console.log(result);
