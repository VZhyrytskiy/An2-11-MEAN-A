var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');

// Models
var User = require('./models/user');

var app = express();

var posts = [{ message: 'hello' }, { message: 'hi' }];

// middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/register', (req, res) => {
  var userData = req.body;

  // создаем пользователя и сохраняем в БД
  var user = new User(userData);
  user.save((err, result) => {
    if (err) {
      // console.log('saving user error');
      return res.status(404).send({ message: 'Saving User Error' });
    }

    res.send(result);
  });
});

app.post('/login', async (req, res) => {
  var userData = req.body;

  // создаем пользователя и сохраняем в БД
  var user = await User.findOne({ email: userData.email });

  if (!user) {
    return res
      .status(404)
      .send({ message: 'Email or Password is invalid' });
  }

  if (userData.pwd !== user.pwd) {
    return res
      .status(404)
      .send({ message: 'Email or Password is invalid' });
  }

  var payload = {};
  var secret = '123'; // <--- TODO: replace
  var token = jwt.encode(payload, secret);

  res.status(200).send({ token });
});

// Подключаемся к БД
mongoose.connect('mongodb://test:test@ds239368.mlab.com:39368/an5', err => {
  if (!err) {
    console.log('Connected to Mongo.');
  }
});

app.listen(3000);
