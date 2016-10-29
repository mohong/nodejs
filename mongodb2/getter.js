var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var User = mongoose.model('User',{
	blog: {
		type: String,
		get: function(url){
			if (!url) {
				return url;
			}
			if (0 !== url.indexOf('http://') && 0 !== url.indexOf('https://')) {
				url = 'http://' + url;
			}
			return url;
		}
	}
});

var user = new User({
	blog: 'arthas.com'
});

user.save(function(err,data){
	if (err) {
		return ;
	}
	console.log(user);
});