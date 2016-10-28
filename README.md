# nodejs
## nodejs网络资源
- [Nodejs爬虫（妹子图）](http://www.jianshu.com/p/006c754027b2)
- [NodeJS中文文档](https://0532.gitbooks.io/nodejs/content/)
- [前端资源教程](https://cnodejs.org/topic/56ef3edd532839c33a99d00e)
- [commonjs](http://javascript.ruanyifeng.com/nodejs/module.html)

# 学习路线
## 预备知识
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
- 简单数据类型：
	- Undefined
	值定义后没有初始化，或者使用undefined初始化，与没有定义是不一样的。
	值为undefined。

	- Null
	空对象的指针，可用于对象变量的初始化。
	Null与Undefined的区别：
	Number(null) = 0, Number(undefined) = NaN
	null的含义是没有值，undefined含义是缺少值
	- String
	使用单引号或者双引号都一样
	toString() , String()
	
	- Number
	包含整数和浮点数
	三种进制，八进制，十进制，十六进制，但是在计算的时候都会转换成十六进制
	Number.MAX_VALUE , Number.MIN_VALUE , Infinity , -Infinity , isFinite()
	Number()
	parseInt() , parseFloat()
	
	- Boolean
	通过Boolean()可以对其他值转换成Boolean类型。
	能转换成false的值有：空字符串，0，NaN，null，undefined。
	其它所有值都会转换成true。
- 复杂数据类型：Object
  - 成员：值或者函数
  - type：
    是操作符，不是函数，检查数据类型或结果，
    检查结果：undefined,boolean,string,number,object,function

- 不能创建自定义的数据类型

### 操作符
- 一元操作符
  递增、递减……

- 位操作符
  对二进制操作

- 布尔操作符
  逻辑或，逻辑与，逻辑非

- 四则运算操作符

- 关系操作符

- 条件操作符

- 赋值操作符

- 逗号操作符

### 语句
break与continue的区别
break表示终止掉循环，continue表示只终止本次循环。

### 函数
- 函数也是一个对象，函数名是指向这个对象的变量。
- arguments
- 参数按值传递
- 匿名函数
- length：表示定义函数时指定的参数个数

### 变量
变量提升

### ECMAScript引用类型
- Object类型
	- 创建方式
		- var obj1 = new Object();
		- var obj2 = {};

	- 访问方式
		- 点表示法
		- 用[] , 里边是字符串，或者变量

- 基本包装类型
	- Number()
		- toFixed(2) 保留两位有效数字
		- toExponential  转换为科学计数法

	- String()
		- slice(index1,index2) 从index1的位置开始截取，到index2的位置介绍，不包含index2
		-  substr(index,num) 从index位置开始取，取num个
		-  substring（index，num） 与substr（）类似，只是小数字会放在前面，
		-  indexOf() / lastIndexOf() 查询某个字符串出现位置的索引
		-  trim() 去掉字符串开始和结尾的空格，创建副本，不会修改字符串本身
		-  toLowerCase() / toUpperCase()
		-  replace()  传入两个参数，会把第一个参数替换为第二个参数，配合正则表达式更好用，第二个参数还可以是函数，用来加工第一个字符串
		-  fromCharCode() / charCodeAt()   ASICK码转换

- Global对象（单体内置对象）
	- 单体内置对象：不依赖执行宿主环境的对象
	- 属性
		- Infinity
		- NaN
		- undefined
		- null
	- 方法
		- eval()
		- isNaN()
		- parseInt()
		- parseFloat()
		- encodeURL()
		- decodeURL()
		- ……
- Math对象（单体内置对象）
	- 属性：Math.PI,Math.E,Math.SQRT2
	- 方法：
		- Math.max() / Math.min() 取最大值/最小值
		- Math.ceil（） 取能够大于传入的小数的最小整数，
		- Mathfloor() 取小于传入小数的最大整数
		- Math.round()  四舍五入取得整数
		- Math.random() 返回0-1之间的随机数
### 数组
- 检查一个变量是不是数组的方法
	- instanceof    eg:`arr instanceof Array`
	- Array.isArray()  eg: `Array.isArray(arr)`
	- 转换为数组
		- Object.keys()  将传入对象的key提取出来组成一个新的数组
		- split() 将字符串分割，然后提取到数组中 eg:
		```
			var str = good day;
			var arr = str.split(' '); 根据空格分割str
			console.log(arr)
			// 	[ 'good', 'day' ]
		```
	- 数组的转换
		- toString()
		- join()      根据传入的字符来连接 
	- 排序
		- sort()    根据字符串的方法排序，会修改数组本身
		- reverse()  根据字符串的方法排序，会修改数组本身
	- 模拟栈的操作(先进后出)
		- push()
		- pop()
	- 模拟队列的操作（先进先出）
		- push()
		- shift()    //从数组头部去掉一个数
	- 其他操作
		- concat()   //连接两个数组
		- slice()    //从数组中取出一段
		- splice()   删除或插入成员
			-  splice(index,num)从index位置开始删除，删除num个成员，会改变原数组，返回被删除的数组
			-  splice(index,0,str) 向index位置插入str
			-  splice（index,1,str） 把index的位置的成员替换为str
		-  indexOf()  /  lastIndexOf()
		-  every() / some() / forEach() / filter() / map()
		-  reduce() / reduceRight()