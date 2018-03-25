import axios from "axios";

const API_KEY = "AIzaSyCf0JI0sxFusehfx6OVqDAmRpiL4LvCdpQ";

const queryURLBase = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + API_KEY + "&q=";
 

export default {
  // Gets all videos
  youTubeSearch: function(queryTopic) {
    return axios.get(`${queryURLBase}${queryTopic}`);
  },
  // Gets the videos that saved
  getVideos: function() {
    return axios.get("/api/saved");
  },
  // Deletes the video with the given id
  deleteVideo: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves an video to the database
  saveVideo: function(videoData) {
    return axios.post("/api/saved", videoData);
  }
};
