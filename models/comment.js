const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date},
  commentId: {type: String}
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
