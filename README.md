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

## 基础知识
### nodejs的特点
- 部署简单方便
- 事件驱动
- 异步编程
- 高效与性能
- 单线程与多进程
- 缺点
	- 大量采用匿名函数，使得抛出的异常不易阅读
	- 无法使用try/catch，使得异常捕获较为复杂
	- 单线程的可靠性问题
	- 不适合CPU密集型的场景
	- 回调代码影响阅读

### 异步的实现方式
- 回调函数
- 事件监听
- 订阅/发布模式

### 开发环境
- VirtualBox
	- 如果电脑连接的是路由器，虚拟机网络连接选择“桥接连接”
	- 安装时安装英文版
	- 选择安装的软件software selection，左边'basic web server'，右边选'development tools'
	- 选择安装的硬盘installation destination，只显示之前创建的8G盘，需要取消一下，再选中
- CentOS
	- 网卡配置：修改/etc/sysconfig/network-scripts/ifcfg-enp0s3文件中的最后一行`ONBOOT`的值为yes。重启
	- 修改windows的host文件，映射linux的ip
	- yum install epel-release (给安装node做准备)
- xshell (PUTTY)
- xftp (WinSCP)
- nodejs: yum install nodejs
- mongodb: 检查是否成功安装： mongo --version
	- 服务端：yum install mongodb-server
	- 客户端： yum install mongodb
- redis: yum install redis   检查是否成功安装:redis-cli --version

### 开发工具
- sublime text 
	- sftp : 将本地文件同步到服务器的插件
- webstorm
- npm与调试工具
	- npm
		- 修改源 
		npm config set strict-ssl false
		npm install -g cnpm --registry=https://registry.npm.taobao.org
	- nodemon ： 监视源文件，当有改变时自动重启应用并执行
		- 安装：cnpm install -g nodemon
		- 使用：nodemon index.js
	- pm2
		- cnpm install -g pm2
	- node-inspector： 调试长时间开启的应用，如http服务
		- 安装：cnpm install -g node-inspector
		- 使用：
			- 关闭服务器防火墙（粗暴）：systemctl stop firewalld
			- nodemon --debug app.js
			- node-inspector
	- chrome developer tools

### 常用的linux命令
- 文件与文件夹的操作
	- 删除文件 rm filename
	- 删除文件夹及下面的文件  rm -rf dirname
	- 最直接的操作 rm -rf name
	
- 系统管理
	- 任务管理器 top , q:退出
	- 查看进程 ps aux,
	- 查看包含ssh的进程 ps aux | grep ssh
	- 查看当前网络配置： ifconfig
	- 系统控制命令 systemctl : 如重启网络 systemctl restart network
- vi
	- 查看模式
	默认是此模式，
	- 编辑模式
	查看模式下，按i键进入编辑模式，此时界面下方出现'insert'，按insert键可切换到替换模式
	- 命令模式
	查看模式下或者编辑模式下按":"可进入命令模式
		- q : 只退出不保存
		- w : 只保存不退出
		- wq : 保存并退出
		- ?： 搜索,后面跟搜索关键字

### 后端简介
- 状态码
	- 301 302 重定向，后面会跟一个Location头，指明跳转位置
	- 304 从浏览器缓存加载
	- 403 权限不够，拒绝访问
	- 404 资源未找到
	- 500 服务器内部错误，通常是后端程序发生错误

- 获取request携带的信息
	- 通过url模块方便获取
	- 框架中有自己的获取方式

## 数据库
- Redis
	- 基本介绍
		- 缓存系统
		- 数据存储
		- 消息中介
	- 基本工具
		- 服务启动工具
		 	- 修改配置文件，让其以守护进程的方式启动：vi /etc/redis.conf，修改daemonize为yes (可通过 '?daemonize no' 快速定位),然后启动： redis-server /etc/redis.conf
		- 命令行客户端工具
			- 命令行连接redis: redis-cli
			- [操作命令](http://redis.io/commands)
				- keys ： 查看当前存储的键 如查看所有的键： keys *
				- set : 存入键值对，如： set name zhangsan
				- get : 取出指定键对应的值 ，如： get name ，  返回："zhang"
		- GUI工具
	- 基本使用
		- 存储和获取值
			- set
			- get
		- 列表
		  - lpush / rpush 
		  - lpop / rpop
		- 集合
		  - sadd  
		  - smembers
		- 消息中介
			- 订阅消息： subscribe , 并且通过on监听
			- 发布消息： publish 

- Mongodb
