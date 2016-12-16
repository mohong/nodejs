var express = require('express');
var router = express.Router();

var muilter = require('../multerUtil');
var UserController = require('../controllers/user');

var path = require('path');

/* GET home page. */
router.get('/success', UserController.index);

router.get('/signup', function (req, res) {
	res.render('upload', {title: '文件上传'});
});

router.post('/signup',muilter.single('photo'), UserController.signup);

module.exports = router;
