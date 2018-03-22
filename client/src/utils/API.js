import axios from "axios";

const APIKEY = "7dab0ac361ad41dfaec99ec48bee4a19";

const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKEY + "&q=";
 

export default {
  // Gets all articles
  nytSearch: function(queryTopic) {
    return axios.get(`${queryURLBase}${queryTopic}`);
  },
  // Gets the articles that saved
  getArticles: function() {
    return axios.get("/api/saved");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  }
};
