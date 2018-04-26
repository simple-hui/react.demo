


const express = require('express');
const router = express.Router();
const connection = require('./mysqlConfig.js');


router.post('/api/home.do',function (req, res,next) {
	console.log(req.body);
	let id = req.body.id;
	console.log(id);
	connection.query(`SELECT homecol FROM home where id = ${id}`,function(error,rows) {
		if (error){
			console.log("执行错误");
			console.log(error);
			next();
		} else {
			console.log(rows);
			return res.status(200).json({msg: rows,success: true,});
		}
	})
	
})





module.exports = router;
