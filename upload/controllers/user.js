/**
 * Created by mohong on 2016/12/15.
 */

var UserModel = require('../models/user');

exports.signup = function (req, res) {
	var user = req.body;
	user.avatar = '/upload/' + req.file.filename;
	UserModel.addUser(user, function (err,result) {
		console.log(result);
	});
	res.redirect('/success');
};

exports.index = function (req, res) {
	UserModel.getAllUser(function (err, users) {
		res.render('index',{users: users});
	});
}

