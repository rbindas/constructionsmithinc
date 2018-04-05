import axios from "axios";



export default {
  // Get comment comments
  getComments: function() {
    return axios.get("/api/comment");
  },
  // Deletes comments with the given id
  deleteComments: function(id) {
    return axios.delete("/api/comment/" + id);
  },
  // Saves comments database
  saveComment: function(commentData) {
    return axios.post("/api/comment", commentData);
  },
  
};
