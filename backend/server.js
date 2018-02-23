var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

// Models
var User = require('./models/user');

var app = express();

// if you get a warning: Mongoose: mpromise (mongoose's default promise library) is deprecated,
// plug in your own promise library instead: http://mongoosejs.com/docs/promise.html
mongoose.Promise = Promise;

var posts = [
  {
    message: 'hello'
  },
  {
    message: 'hi'
  }
];

// middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.get('/users', async (req, res) => {
  try {
    var users = await User.find(
      {}, // <--- empty objects means the entire list of users
      '-pwd -__v' // <--- remove property pwd, __v
    );
    res.send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/profile/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    var user = await User.findById(
      req.params.id,
      {}, // <--- empty objects means the entire list of users
      '-pwd -__v' // <--- remove property pwd, __v
    );
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(200);
  }
});

app.post('/register', (req, res) => {
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

app.post('/login', async (req, res) => {
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

// Подключаемся к БД
mongoose.connect('mongodb://test:test@ds239368.mlab.com:39368/an5', err => {
  if (!err) {
    console.log('Connected to Mongo.');
  }
});

app.listen(3000);
