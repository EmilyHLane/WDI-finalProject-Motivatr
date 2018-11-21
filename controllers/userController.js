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

module.exports = { index };
