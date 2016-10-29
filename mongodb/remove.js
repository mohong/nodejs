var mongoose = require('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

//先通过findOne()找到一行数据，然后将其删掉
Book.findOne({author:'Jack'},function(err,data){
	if (err) {
		console.log(err);
		return;
	}
	console.log('即将要删除的结果为：'+data);
	if (data) {
		data.remove();
		console.log('删除完成');
	}
});