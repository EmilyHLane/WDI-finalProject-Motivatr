const db = require("../models");
const Post = db.Post;
const User = db.User;

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

//create new post
const create = (req, res) => {
  const newPost = new Post({
    image: req.body.image,
    altTxt: req.body.altTxt,
    textUpper: req.body.textUpper,
    textLower: req.body.textLower,
    likes: req.body.likes
  });
  User.findOne({ _id: req.body.userId }, (err, foundUser) => {
    if (err) throw err;
    newPost.createdBy = foundUser;
    newPost.save((err, newPost) => {
      if (err) throw err;
      res.json(newPost);
    });
  });
  // Post.create(req.body, (err, newPost) => {
  //   if (err) throw err;
  //   User.findById({ _id: req.body.userId })
  //     .populate("createdBy")
  //     .exec((err, addedUser) => {
  //       if (err) throw err;
  //       console.log(addedUser);
  //     });
  //   res.json(newPost);
  // });
};

//update post
const update = (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPost) => {
      if (err) throw err;
      res.json(updatedPost);
    }
  );
};

//delete a post
const destroy = (req, res) => {
  Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (err) throw err;
    console.log("deleted " + deletedPost);
  });
};

module.exports = { index, show, create, update, destroy };
