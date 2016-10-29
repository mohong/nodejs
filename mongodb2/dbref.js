var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var User = mongoose.model('User',{
	username: String
});

var News = mongoose.model('News',{
	title: String,
	author: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	}
});

var user = new User({
	username: 'mohong'
});

var news = new News({
	title: 'Congratulation!',
	author: user
})

user.save(function(err){
	if (err) {
		return console.log('save user faild',err);
	}
	news.save(function(err){
		if (err) {
			return console.log('new save faild',err);
		}
		News.findOne().populate('author').exec(function(err,data){
			console.log('after populate: ', err,data);
		});
	})
});