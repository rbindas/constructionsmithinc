const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/videoslist");

const videoSeed = [
  {
    title: "The Top Kitchen Remodeling Trends for 2017",
    url: "https://i.ytimg.com/vi/eOcnSrEtiAo/default.jpg",
    videoId: "eOcnSrEtiAo"
  },
  {
    title: "45 Small Bathroom Design Ideas 201",
    description: "bathroom vanities, shower curtains, bathroom ideas, bathroom remodel, kitchen design, small bathroom ideas, bathroom, mirrors, bathroom tile, bathroom accessories, bathroom tile ideas, bathroom..",
    url: "https://i.ytimg.com/vi/M7GExZliI2U/default.jpg",
    videoId: "M7GExZliI2U"   
  }
  
];

db.Video
  .remove({})
  .then(() => db.Videos.collection.insertMany(videoSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
