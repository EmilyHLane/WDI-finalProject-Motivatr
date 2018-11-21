const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = require("./Comment").schema;

const PostSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  image: String,
  text: String,
  datePosted: Date,
  comments: [CommentSchema],
  likes: Number
});

const Post = mogoose.model("Post", PostSchema);

module.exports = Post;
