var express = require('express');
var router = express.Router();
var connection = require('../../db/sql');
var User = require('../../db/userSql')

// 用户登录
router.post('/login', function (req, res, next) {

  let params = {
    username: req.body.username,
    password: req.body.password
  }
  // 查询用户手机号是否存在
  connection.query(User.queryUserTel(params), function (error, result) {
    // 手机号存在
    console.log(result);
    if (result.length > 0) {
      connection.query(User.queryUserPwd(params), function (error, rest) {
        if (rest.length > 0) {
          // 手机号和密码都正确
          res.send({
            code: 200,
            data: {
              success: true,
              message: '登录成功',
              data: rest[0]
            }
          })
        } else {
          res.send({
            code: 302,
            data: {
              success: false,
              message: '密码错误'
            }
          })
        }
      });
    } else {
      res.send({
        code: 301,
        data: {
          success: false,
          message: '手机号不存在'
        }
      })
    }
  });
});


module.exports = router;
