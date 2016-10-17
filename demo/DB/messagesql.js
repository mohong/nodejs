/**
 * Created by mohong on 2016/10/17.
 */
var messageSQL = {
    insert: 'INSERT INTO page(title,content,link) VALUES(?,?,?)',
    queryAll: 'SELECT * FROM page',
    getMessageById: 'SELECT * FROM page WHERE id=?'
};

module.exports = messageSQL;