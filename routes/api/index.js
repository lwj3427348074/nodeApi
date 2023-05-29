var express = require('express');
var router = express.Router();
var connection = require('../../db/sql');

/* GET home page. */
router.get('/tab', function (req, res, next) {
  res.json({
    //响应编号
    code: '0000',
    //响应的信息
    msg: '读取成功',
    //响应的数据
    data: [
      { id: 1, name: 'zs' },
      { id: 2, name: 'ls' }
    ],
  })
});

router.get('/tabs', function (req, res, next) {
  res.send({
    code: 0,
    data: [
      { id: 1, label: '推荐' },
      { id: 2, label: '金骏眉' },
      { id: 3, label: '大红袍' },
      { id: 4, label: '铁观音' },
      { id: 5, label: '绿茶' },
      { id: 6, label: '紫砂壶' },
      { id: 7, label: '漳平水仙' },
      { id: 8, label: '普洱' },
      { id: 9, label: '正山小种' },
      { id: 10, label: '茉莉花茶' },
      { id: 11, label: '建盏' },
      { id: 12, label: '大师壶' },
      { id: 13, label: '茶具' },
    ]
  });
});

// 查询商品的接口
router.get('/goods/shopList', function (req, res, next) {
  // 前端给后端的数据
  let searchName = req.query.searchName

  // 查询语句
  let sql = 'select * from goods_list where name like "%' + searchName + '%"';
  connection.query(sql, function (err, result) {
    // if (err) {
    //   res.json({
    //     code: '1001',
    //     msg: '查询失败',
    //     data: null
    //   })
    // }
    res.send({
      code: 0,
      data: result
    })
  });
});



module.exports = router;
