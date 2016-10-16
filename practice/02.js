//实现命令行计算器抽象模块
'use strict';
//1、接收参数
const args = process.argv.slice(2);
//2、分析参数
//形式：p1 op p2

if (args.length !== 3){
    console.log('参数不合法');
    throw new Error('参数不合法');
}

let p1 = args[0];
let op = args[1];
let p2 = args[2];

//3、进行运算
const calc = require('./module/calculator.js');

let result;
switch (op) {
    case '+':
        result = calc.add(p1,p2);
        break;
    case '-':
        result = calc.subtract(p1,p2);
        break;
    case '*':
        result = calc.multiply(p1,p2);
        break;
    case '/':
        result = calc.divide(p1,p2);
        break;
    default:
        throw new Error('不被支持的操作符' + op);
        break;
}
console.log(result);