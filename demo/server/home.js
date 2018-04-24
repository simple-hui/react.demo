


const express = require('express');
const router = express.Router();

const connection = require('./mysqlConfig.js');


router.post('/api/home.do',function (req, res) {
	return res.status(200).json({msg: '成功',success: true,});
})





module.exports = router;
