/**
 * Created by mohong on 2016/10/17.
 */

'use strict';

//导入mysql模块
const mysql = require('mysql');
const dbConfig = require('./DB/DBConfig');
const messageSQL = require('./DB/messagesql');

//使用dbConfig配置的信息创建一个mysql连接池
const pool = mysql.createPool(dbConfig.mysql);

var message = {
     //添加信息
    addMessage: function addMessage(title,content,link) {
                    //从连接池获取连接
                    pool.getConnection((error,connection) => {
                        if (error){
                            throw error;
                        } else {
                            //建立连接，增加一个用户
                            connection.query(messageSQL.insert,[title,content,link],(error)=>{
                                if(error){
                                    throw error;
                                } else {
                                    console.log('添加成功');
                                }
                                connection.release();
                            });
                        }
                    })
                }
}

module.exports = message;