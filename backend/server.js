var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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
      console.log('saving user error');
    }
    res.sendStatus(200);
  });
});

// Подключаемся к БД
mongoose.connect(
  'mongodb://test:test@ds239368.mlab.com:39368/an5',
  { useMongoClient: true },
  err => {
    if (!err) {
      console.log('Connected to Mongo.');
    }
  }
);

app.listen(3000);
