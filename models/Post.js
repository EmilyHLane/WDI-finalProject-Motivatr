const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = require("./Comment").schema;
const User = require("./User");

const PostSchema = new Schema({
  createdBy: User.schema,
  image: String,
  textUpper: String,
  textLower: String,
  datePosted: { type: Date, default: Date.now },
  comments: [CommentSchema],
  likes: Number
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
