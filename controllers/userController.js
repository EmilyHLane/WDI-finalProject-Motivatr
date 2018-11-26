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

//find user by email and password
const login = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then(function(user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            failed: "unauthorized access"
          });
        }
        if (result) {
          return res.status(200).json({
            success: "welcome to jwt auth"
          });
        }
        return res.status(401).json({
          failed: "unauthorized"
        });
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
};

//create a new user with encrypted password
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

module.exports = { index, show, login, create };
