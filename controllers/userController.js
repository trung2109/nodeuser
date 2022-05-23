const UserModel = require('../models/user');
const bcrypt = require('bcrypt');

exports.userRegister = async (req, res, next) =>  {
  console.log(req.body, 'req.body')
  const passwordHash = await bcrypt.hash(req.body.password, 10);
  const userData = {
    username: req.body.username,
    password: passwordHash,
  }
  const userRegister = await UserModel.create(userData);
  if(userRegister) {
    res.redirect('/user/login');
  } else {
    res.redirect('/user/register');
  }
}