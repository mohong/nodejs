var mongoose = require('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

//定义条件
var cond = {
	$or: [
		{author: 'Jack'},
		{author: 'Jim'}
	]
}

Book.find(cond,function(err,data){
	if (err) {
		console.log(err);
		return;
	}
	console.log('condition:',cond,'result:',data);
});