var mongoose = require('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

Book.find({},function(err,data){
	if (err) {
		console.log('err:',err);
		return;
	}
	console.log(data);
});