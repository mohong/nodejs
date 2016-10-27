# nodejs
## nodejs网络资源
- [Nodejs爬虫（妹子图）](http://www.jianshu.com/p/006c754027b2)
- [NodeJS中文文档](https://0532.gitbooks.io/nodejs/content/)
- [前端资源教程](https://cnodejs.org/topic/56ef3edd532839c33a99d00e)
- [commonjs](http://javascript.ruanyifeng.com/nodejs/module.html)

## nodejs学习笔记
### 语言基础
- 用var声明的变量，不能用delete删除，不用var声明的变量，可以通过delete删除。
```
λ node
> var string1 = 'hello world';
undefined
> Object.getOwnPropertyDescriptor(global,'string1')
{ value: 'hello world',
  writable: true,
  enumerable: true,
  configurable: false }
> string2 = 'hello node';
'hello node'
> Object.getOwnPropertyDescriptor(global,'string2')
{ value: 'hello node',
  writable: true,
  enumerable: true,
  configurable: true }
>
```
configurable为true时表示可以通过delete删除，否则不能。

### 数据类型