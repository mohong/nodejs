var mongoose = require('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

Book.findOne({author:'Jack'},function(err,data){
	if (err) {
		console.log('err',err);
	}

	//此处开可以修改查询到的数据
	//data.author = "Tom";
	//data.save();

	console.log(data);
});