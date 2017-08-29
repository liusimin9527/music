var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '',	   //主机地址	
	uder: '',      //用户名
	password: '',  //密码
	database: ''   //数据库名
});

connection.connect();   //连接数据库

/* 数据库操作 */
//查询
var sql = '';

connection.query(sql, function (err, result) {
	if (err) {
		console.log('SELECT ERROR -', err.message);
		return;
	}		
});

//查询结束
connection.end();  
