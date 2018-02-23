var mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  email: String,
  pwd: String,
  name: String,
  description: String
});

module.exports = mongoose.model('User', userSchema);

userSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('pwd')) {
    return next();
  }

  bcrypt.hash(user.pwd, null, null, (err, hash) => {
    if (err) {
      return next(err);
    }

    user.pwd = hash;
    next();
  });
});
