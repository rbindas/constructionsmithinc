const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true},
  commentId: {type: String}
 
});

const Comments = mongoose.model("Comment", CommentSchema);

module.exports = Comments;
