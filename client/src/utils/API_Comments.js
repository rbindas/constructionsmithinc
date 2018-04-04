import axios from "axios";



export default {
  // Get saved comments
  getComments: function() {
    return axios.get("/api/saved");
  },
  // Deletes comments with the given id
  deleteComments: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves comments database
  saveComment: function(commentData) {
    return axios.post("/api/saved", commentData);
  },
  
};
