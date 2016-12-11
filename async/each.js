/**
 * Created by mohong on 2016/11/18.
 */

var fs = require('fs');
var async = require('async');

async.waterfall([
    function (callback) {
        callback(null,'one','two');
    },
    function (arg1,arg2,callback) {
        callback(null,'three');
        console.log(arg1,arg2);
    },
    function (arg1,callback) {
        callback(null,'done');
    }
],function (err,result) {
    console.log(result);
})
