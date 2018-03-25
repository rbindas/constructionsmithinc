const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: { type: String, required: true },
  snippet: {type: String}
  url: {type: String, required: true}
 
});

const Videos = mongoose.model("Videos", VideoSchema);

module.exports = Videos;
