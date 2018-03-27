const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: { type: String, required: true },
  videoId: {type: String}
 
});

const Videos = mongoose.model("Videos", VideoSchema);

module.exports = Videos;
