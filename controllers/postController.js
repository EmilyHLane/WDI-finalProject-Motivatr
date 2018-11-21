const db = require("../models");
const Post = db.Post;

//business logic - CRUD - here
//find all users
const index = (req, res) => {
  Post.find({}, (err, allPosts) => {
    if (err) throw err;
    res.json(allPosts);
  });
};

module.exports = { index };
