import React, { Component } from "react";

import image1 from  "../img/portfolio/500x375/bathrooms/angie-black-shower-columns.jpg";
import image1thumb from  "../img/portfolio/150x150/bathrooms/angie-black-shower-columns.jpg";

import image2 from  "../img/portfolio/500x375/bathrooms/angie-black-tub.jpg";
import image2thumb from  "../img/portfolio/150x150/bathrooms/angie-black-tub.jpg";

import image3 from  "../img/portfolio/500x375/bathrooms/basement-bathroom-counter.jpg";
import image3thumb from  "../img/portfolio/150x150/bathrooms/basement-bathroom-counter.jpg";

import image4 from  "../img/portfolio/500x375/bathrooms/bathroom-cubby-hole-bigger.jpg";
import image4thumb from  "../img/portfolio/150x150/bathrooms/bathroom-cubby-hole-bigger.jpg";

import image5 from  "../img/portfolio/500x375/bathrooms/bathroom-flowing-water2.jpg";
import image5thumb from  "../img/portfolio/150x150/bathrooms/bathroom-flowing-water2.jpg";

import image6 from  "../img/portfolio/500x375/bathrooms/IMG_0898.jpg";
import image6thumb from  "../img/portfolio/150x150/bathrooms/IMG_0898.jpg";

import image7 from  "../img/portfolio/500x375/bathrooms/bathroom-light-room-shot.jpg";
import image7thumb from  "../img/portfolio/150x150/bathrooms/bathroom-light-room-shot.jpg";

import image8 from  "../img/portfolio/500x375/bathrooms/bathroom-nice-shot-of-shower.jpg";
import image8thumb from  "../img/portfolio/150x150/bathrooms/bathroom-nice-shot-of-shower.jpg";


import image9 from  "../img/portfolio/500x375/bathrooms/smith-bathroom-3.jpg";
import image9thumb from  "../img/portfolio/150x150/bathrooms/smith-bathroom-3.jpg";

import image10 from  "../img/portfolio/500x375/bathrooms/smith-bathroom-4.jpg";
import image10thumb from  "../img/portfolio/150x150/bathrooms/smith-bathroom-4.jpg";

import image11 from  "../img/portfolio/500x375/bathrooms/smith-bathroom-5.jpg";
import image11thumb from  "../img/portfolio/150x150/bathrooms/smith-bathroom-5.jpg";

import image12 from  "../img/portfolio/500x375/bathrooms/tub2.jpg";
import image12thumb from  "../img/portfolio/150x150/bathrooms/tub2.jpg";

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class BathroomGallery extends Component {


  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const bathroomImages = [
      {
        original: image2,
        thumbnail: image2thumb
      },
      {
        original: image4,
        thumbnail: image4thumb
      },
      {
        original: image3,
        thumbnail: image3thumb
      },
      {
        original: image1,
        thumbnail: image1thumb
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
        items={bathroomImages}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
    );
  }

};

export default BathroomGallery;