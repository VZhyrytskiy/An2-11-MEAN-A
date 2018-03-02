const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const express = require('express');

const router = express.Router();
const User = require('./models/user');

router.post('/register', (req, res) => {
  var userData = req.body;

  // создаем пользователя и сохраняем в БД
  var user = new User(userData);
  user.save((err, result) => {
    if (err) {
      // console.log('saving user error');
      return res.status(404).send({
        message: 'Saving User Error'
      });
    }

    res.send(result);
  });
});

router.post('/login', async (req, res) => {
  var loginData = req.body;

  // создаем пользователя и сохраняем в БД
  var user = await User.findOne({
    email: loginData.email
  });

  if (!user) {
    return res.status(404).send({
      message: 'Email or Password is invalid'
    });
  }

  bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) => {
    if (!isMatch) {
      return res.status(404).send({
        message: 'Email or Password is invalid'
      });
    }

    var payload = {};
    var secret = '123'; // <--- TODO: replace
    var token = jwt.encode(payload, secret);

    res.status(200).send({
      token
    });
  });
});

module.exports = router;
