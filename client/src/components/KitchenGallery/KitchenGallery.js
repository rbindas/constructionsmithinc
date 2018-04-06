import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import image1 from  "../img/portfolio/800x600/kitchens/angie-black-kitchen-backsplash (2).jpg";
import image1thumb from  "../img/portfolio/150x150/kitchens/angie-black-kitchen-backsplash (2).jpg";

import image2 from  "../img/portfolio/800x600/kitchens/angie-black-kitchen-backsplash.jpg";
import image2thumb from  "../img/portfolio/150x150/kitchens/angie-black-kitchen-backsplash.jpg";

import image3 from  "../img/portfolio/800x600/kitchens/angie-black-kitchen-counter.jpg";
import image3thumb from  "../img/portfolio/150x150/kitchens/angie-black-kitchen-counter.jpg";

import image4 from  "../img/portfolio/800x600/kitchens/angie-black-kitchen-island.jpg";
import image4thumb from  "../img/portfolio/150x150/kitchens/angie-black-kitchen-island.jpg";

import image5 from  "../img/portfolio/800x600/kitchens/berzin-kitchen-counter.jpg";
import image5thumb from  "../img/portfolio/150x150/kitchens/berzin-kitchen-counter.jpg";

import image6 from  "../img/portfolio/800x600/kitchens/brown-counter.jpg";
import image6thumb from  "../img/portfolio/150x150/kitchens/brown-counter.jpg";

import image7 from  "../img/portfolio/800x600/kitchens/IMG_2191.jpg";
import image7thumb from  "../img/portfolio/150x150/kitchens/IMG_2191.jpg";

import image8 from  "../img/portfolio/800x600/kitchens/IMG_2395.jpg";
import image8thumb from  "../img/portfolio/150x150/kitchens/IMG_2395.jpg";

import image9 from  "../img/portfolio/800x600/kitchens/kitchen-bar.jpg";
import image9thumb from  "../img/portfolio/150x150/kitchens/kitchen-bar.jpg";

import image10 from  "../img/portfolio/800x600/kitchens/pink-backsplash.jpg";
import image10thumb from  "../img/portfolio/150x150/kitchens/pink-backsplash.jpg";

import image11 from  "../img/portfolio/800x600/kitchens/pink-backsplash2.jpg";
import image11thumb from  "../img/portfolio/150x150/kitchens/pink-backsplash2.jpg";





class KitchenGallery extends Component {


  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const kitchenImages = [
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
      }
    ]

    return (
      <ImageGallery
        items={kitchenImages}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
    );
  }

};

export default KitchenGallery;