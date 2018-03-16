const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const express = require('express');

const router = express.Router();
const User = require('./models/user');

router.post('/register', (req, res) => {
  var userData = req.body;

  // создаем пользователя и сохраняем в БД
  var user = new User(userData);
  user.save((err, newUser) => {
    if (err) {
      // console.log('saving user error');
      return res.status(500).send({
        message: 'Saving User Error'
      });
    }

    createSendToken(res, newUser);
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

    createSendToken(res, user);
  });
});

function createSendToken(res, user) {
  const payload = {
    sub: user._id
  };
  const secret = '123'; // <--- TODO: replace
  const token = jwt.encode(payload, secret);

  res.status(200).send({
    token
  });
}

const auth = {
  router,
  checkAuthenticated: (req, res, next) => {
    if (!req.header('authorization')) {
      return res
        .status(401)
        .send({ message: 'Unauthorized. Missing Auth Header' });
    }

    // format is: 'token NFLJLNKLJRLKGJLFJIOERUO'
    const token = req.header('authorization').split(' ')[1];

    const secret = '123';
    const payload = jwt.decode(token, secret);

    if (!payload) {
      return res
        .status(401)
        .send({ message: 'Unauthorized. Auth Header Invalid' });
    }

    req.userId = payload.sub;

    next();
  }
};

module.exports = auth;
