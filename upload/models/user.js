/**
 * Created by mohong on 2016/12/15.
 */

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/upload");

var UserSchema = new mongoose.Schema({
	username: String,
	passworld: String,
	avatar: String
});

UserSchema.statics.addUser = function (user, callback) {
	this.create(user, callback);
};

UserSchema.statics.getUser = function (username, passworld, callback) {
	this.findOne({username: username, passworld: passworld}, callback);
};

UserSchema.statics.getAllUser = function (callback) {
	this.find({}, callback);
};

module.exports = mongoose.model('User',UserSchema);