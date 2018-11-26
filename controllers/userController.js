const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");

//business logic - CRUD - here
//find all users
const index = (req, res) => {
  User.find({}, (err, allUsers) => {
    if (err) throw err;
    res.json(allUsers);
  });
};

//find user by id
const show = (req, res) => {
  User.findById(req.params.id, (err, showUser) => {
    if (err) throw err;
    res.json(showUser);
  });
};

//create a new user
const create = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      User.create({ email: req.body.email, password: hash }, (err, newUser) => {
        if (err) throw err;
        res.json(newUser);
      });
    }
  });
};

//update a user - add later if needed

//delete a user - add later if needed

module.exports = { index, show, create };
