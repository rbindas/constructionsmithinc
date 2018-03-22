const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactarticleslist",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "Mueller Subpoenas Trump Organization, Demanding Documents About Russia",
    date: "MARCH 15, 2018",
    url: "https://www.nytimes.com/2018/03/15/us/politics/trump-organization-subpoena-mueller-russia.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news"
  },
  {
    title: "Trump Repeats His False Claim On Trade With Canada",
    date: "MARCH 15, 2018 1:22PM ET",
    url: "https://www.nytimes.com/2018/03/15/us/politics/trump-repeats-false-claim-about-canada-after-admitting-uncertainty-over-figure.html"
      
  },
  {
    title: "March Madness: Live Scores And Analysis",
    date: "March 15, 2018",
    url: "https://www.nytimes.com/2018/03/15/sports/march-madness-scores.html"
  },
  {
    title: "Rising Seas Threaten the Ancient Monuments of Easter Island",
    date: "March 15, 2018",
    url: "https://www.nytimes.com/interactive/2018/03/14/climate/easter-island-erosion.html"
      
    
  },
  {
    title: "U.S. Stayed Silent on Its Role in Another Firefight in Niger",
    date: "March 15, 2018",
    url: "https://www.nytimes.com/2018/03/14/world/africa/niger-green-berets-isis-firefight-december.html"
      
  }
];

db.Article
  .remove({})
  .then(() => db.Articles.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
