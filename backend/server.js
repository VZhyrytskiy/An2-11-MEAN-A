var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Models
const User = require('./models/user');
const Post = require('./models/post');

const auth = require('./auth');

var app = express();

// if you get a warning: Mongoose: mpromise (mongoose's default promise library) is deprecated,
// plug in your own promise library instead: http://mongoosejs.com/docs/promise.html
mongoose.Promise = Promise;

// middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/posts/:id', async (req, res) => {
  const author = req.params.id;
  const posts = await Post.find({ author });
  res.send(posts);
});

app.post('/post', (req, res) => {
  const postData = req.body;
  postData.author = '5a9921eebbef0e415c4d5ea1';

  const post = new Post(postData);

  post.save((err, result) => {
    if (err) {
      return res.status(500).send({
        message: 'Saving Post Error'
      });
    }

    res.send(result);
  });
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

// Подключаемся к БД
mongoose.connect('mongodb://test:test@ds239368.mlab.com:39368/an5', err => {
  if (!err) {
    console.log('Connected to Mongo.');
  }
});

app.use('/auth', auth);
app.listen(3000);
