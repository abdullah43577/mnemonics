const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  bookmarked_mnemonics: {
    type: Array,
  },
});

// hash password before saving to database
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email }); // find one record in the database with the email
  if (user) {
    const auth = await bcrypt.compare(password, user.password); // compare the password entered with the password in the database
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
