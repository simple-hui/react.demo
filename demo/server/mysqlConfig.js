//数据库

const mysql = require('mysql');
const fs = require('fs');
const path = require('path');



const config = JSON.parse(fs.readFileSync(
	path.normalize(__dirname + '/../package.json'), 
	'utf-8'
	)).config['sql']


let connection = mysql.createConnection(config);


module.exports = connection;

