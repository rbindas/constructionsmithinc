import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import image1 from  "../img/portfolio/500x375/other/angie-black-dining-room.jpg";
import image1thumb from  "../img/portfolio/150x150/other/angie-black-dining-room.jpg";

import image2 from  "../img/portfolio/500x375/other/angie-black-entryway-medallion.jpg";
import image2thumb from  "../img/portfolio/150x150/other/angie-black-entryway-medallion.jpg";

import image3 from  "../img/portfolio/500x375/other/angie-black-fireplace.jpg";
import image3thumb from  "../img/portfolio/150x150/other/angie-black-fireplace.jpg";

import image4 from  "../img/portfolio/500x375/other/berzin-fireplace.jpg";
import image4thumb from  "../img/portfolio/150x150/other/berzin-fireplace.jpg";

import image5 from  "../img/portfolio/500x375/other/berzin-porcelain-floor.jpg";
import image5thumb from  "../img/portfolio/150x150/other/berzin-porcelain-floor.jpg";

import image6 from  "../img/portfolio/500x375/other/bloom-david-at-bar.jpg";
import image6thumb from  "../img/portfolio/150x150/other/bloom-david-at-bar.jpg";

import image7 from  "../img/portfolio/500x375/other/bloom-nice-fireplace-shot.jpg";
import image7thumb from  "../img/portfolio/150x150/other/bloom-nice-fireplace-shot.jpg"

import image8 from  "../img/portfolio/500x375/other/bloom-T-shaped-bar.jpg";
import image8thumb from  "../img/portfolio/150x150/other/bloom-T-shaped-bar.jpg"

import image9 from  "../img/portfolio/500x375/other/IMG_1174.jpg";
import image9thumb from  "../img/portfolio/150x150/other/IMG_1174.jpg"

import image10 from  "../img/portfolio/500x375/other/IMG_1181.jpg";
import image10thumb from  "../img/portfolio/150x150/other/IMG_1181.jpg"

import image11 from  "../img/portfolio/500x375/other/berzin-fireplace.jpg";
import image11thumb from  "../img/portfolio/150x150/other/berzin-fireplace.jpg"

import image12 from  "../img/portfolio/500x375/other/bloom-nice-fireplace-shot.jpg";
import image12thumb from  "../img/portfolio/150x150/other/bloom-nice-fireplace-shot.jpg"




class OtherGallery extends Component {


  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const otherImages = [
      {
        original: image1,
        thumbnail: image1thumb
      },
            {
        original: image2,
        thumbnail: image2thumb
      },
            {
        original: image3,
        thumbnail: image3thumb
      },
            {
        original: image4,
        thumbnail: image4thumb
      },
            {
        original: image5,
        thumbnail: image5thumb
      },
            {
        original: image6,
        thumbnail: image6thumb
      },
            {
        original: image7,
        thumbnail: image7thumb
      },
            {
        original: image8,
        thumbnail: image8thumb
      },
            {
        original: image9,
        thumbnail: image9thumb
      },
            {
        original: image10,
        thumbnail: image10thumb
      },
            {
        original: image11,
        thumbnail: image11thumb
      },
            {
        original: image12,
        thumbnail: image12thumb
      }

    ]


    return (
      <ImageGallery
        items={otherImages}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
    );
  }

};

export default OtherGallery;