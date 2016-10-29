var mongoose = require('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

var book = new Book({
	name: "MEAN WEB DEVELOPER",
	author: "DEV",
	publishTime: new Date()
});

//此处还可以继续修改
//book.author = "Jack";

book.save(function(err){
	console.log(err ? 'faeled' : 'succes	s');
});