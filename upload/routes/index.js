var express = require('express');
var router = express.Router();

var muilter = require('../multerUtil');


var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: '上传成功'});
});

router.get('/upload', function (req, res) {
	res.render('upload', {title: '文件上传'});
});

router.post('/upload',muilter.single('photo'), function (req, res, next) {
	console.log(req.file);
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;
