const db = require("../models");
const User = db.User;

//business logic - CRUD - here
//find all users
const index = (req, res) => {
  User.find({}, (err, allUsers) => {
    if (err) throw err;
    res.json(allUsers);
  });
};

const show = (req, res) => {
  User.findById(req.params.id, (err, showUser) => {
    if (err) throw err;
    res.json(showUser);
  });
};

const create = (req, res) => {
  User.create(req.body, (err, newUser) => {
    if (err) throw err;
    res.json(newUser);
  });
};

module.exports = { index, show, create };
