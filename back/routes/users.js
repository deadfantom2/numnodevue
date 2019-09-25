var express = require('express');
var router = express.Router();

var db;

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const user = await req.db.collection('MOCK_DATA');
  const users = await user.find({}).toArray();

  if(users){
    console.log(users)
  }
  console.log(users)
  res.send(users);
});

module.exports = router;
