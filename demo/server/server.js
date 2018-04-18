//初始化引入express
const express = require('express');
const app = express();

//引入其他文件入口
const home = require('./home.js');




//使用
app.use(home);






//启动服务 并在终端显示服务端口号
const server = app.listen(3333,function () {
	console.log('服务器启动成功，端口号：3333');
})