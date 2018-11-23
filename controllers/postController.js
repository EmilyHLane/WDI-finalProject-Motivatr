const db = require("../models");
const Post = db.Post;

//business logic - CRUD - here
//find all posts
const index = (req, res) => {
  Post.find({}, (err, allPosts) => {
    if (err) throw err;
    res.json(allPosts);
  });
};

//find post by id
const show = (req, res) => {
  Post.findById(req.params.id, (err, showPost) => {
    if (err) throw err;
    res.json(showPost);
  });
};

//createnew post
const create = (req, res) => {
  Post.create(req.body, (err, newPost) => {
    if (err) throw err;
    res.json(newPost);
  });
};

module.exports = { index, show, create };
