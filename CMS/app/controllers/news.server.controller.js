/**
 * 新闻-服务端-控制器
 * Created by mohong on 2016/10/31.
 */

var mongoose = require('mongoose');
var News = mongoose.model("News");

module.exports = {
    //创建新闻
    create: function (req,res,next) {
        var news = new News(req.body);
        news.save(function (err) {
            if(err){
                return next(err);
            }
            return res.json(news);
        });
    },
    //新闻列表
    list: function (req,res,next) {
        //每页显示的列表数，默认10条
        var pagesize = parseInt(req.query.pagesize,10) || 10;
        var pagestart = parseInt(req.query.pagestart,10) || 1;

        News
            .find()
            .skip((pagestart - 1) * pagesize)
            .limit(pagesize)
            .exec(function (err,docs) {
                if(err){
                    return next(err);
                }
                return res.json(docs);
            })
    },
    //通过id查找
    getById: function (req,res,next,id) {
        if (!id){
            return next(new Error('news not found'));
        }
        News
            .findOne({_id: id})
            .exec(function (err,doc) {
                if (err){
                    return next(err);
                }
                if (doc){
                    return next(new Error('News not found'));
                }
                req.news = doc;
                return next();
            })
    },
    //获取新闻详情
    get: function (req, res, next) {
        return res.json(req.news);
    }
};