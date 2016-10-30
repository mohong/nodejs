/**
 * 新闻-服务端-路由
 * 路由的功能是把用户的请求分配给相应的控制器
 * Created by mohong on 2016/10/31.
 */

var NewsController = require('../controllers/news.server.controller');

module.exports = function (app) {
    app.route('/news')
        .get(NewsController.list)
        .post(NewsController.create);

    app.route('news/:nid')
        .get(NewsController.get);

    app.param('nid',NewsController.getById);
};