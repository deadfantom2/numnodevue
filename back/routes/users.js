var express = require('express');
var router = express.Router();
var user = require('../models/User');

// var db;
//
// /* GET users listing. */
// router.get('/', async (req, res, next) => {
//   const user = await req.db.collection('MOCK_DATA');
//   const users = await user.find({}).toArray();
//   res.status(200).json(users);
// });

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await user.find({});
  res.status(200).json(users);
});

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const userone = await user.findById({"_id": id});
  res.status(200).json(userone);
});



module.exports = router;
