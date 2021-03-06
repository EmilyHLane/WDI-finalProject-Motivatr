const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  image: { type: String, required: true },
  altTxt: String,
  textUpper: { type: String, required: true },
  textLower: String,
  datePosted: { type: Date, default: Date.now },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  likes: Number
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
