const mysql = require('mysql');
//导入配置文件
// const { DBHOST, DBPORT, DBNAME } = require('../config/config')

let connection = mysql.createConnection({
  host: 'localhost', //数据库地址
  port: '3306',//端口号
  user: 'root',//用户名
  password: 'admin123',//密码
  database: 'vue_store'
});

connection.connect();

//判断是否连接成功
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// connection.end();

module.exports = connection