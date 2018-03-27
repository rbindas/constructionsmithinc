import React from "react";
import Iframe from "react-iframe";

const VideoList = (props) => {
  
  return (
    <div>
    	<Iframe
                    url="http://www.youtube.com/embed/9B7te184ZpQ"
                    width="450px"
                    height="350px"
                    display="initial"
                    position="relative"
                    allowFullScreen
                />
    </div>
  );
};

export default VideoList;