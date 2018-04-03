import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import { Button } from 'react-bootstrap';


import image1 from  "../img/portfolio/500x375/other/angie-black-dining-room.jpg";
import image1thumb from  "../img/portfolio/150x150/other/angie-black-dining-room.jpg";

import image2 from  "../img/portfolio/500x375/other/angie-black-entryway-medallion.jpg";
import image2thumb from  "../img/portfolio/150x150/other/angie-black-entryway-medallion.jpg";

import image3 from  "../img/portfolio/500x375/other/angie-black-fireplace.jpg";
import image3thumb from  "../img/portfolio/150x150/other/angie-black-fireplace.jpg";

import image4 from  "../img/portfolio/500x375/other/basement-counter.jpg";
import image4thumb from  "../img/portfolio/150x150/other/basement-counter.jpg";

import image5 from  "../img/portfolio/500x375/other/bathroom-crown-molding.jpg";
import image5thumb from  "../img/portfolio/150x150/other/bathroom-crown-molding.jpg";

import image6 from  "../img/portfolio/500x375/other/berzin-fireplace.jpg";
import image6thumb from  "../img/portfolio/150x150/other/berzin-fireplace.jpg";

import image7 from  "../img/portfolio/500x375/other/berzin-porcelain-floor.jpg";
import image7thumb from  "../img/portfolio/150x150/other/berzin-porcelain-floor.jpg";

import image8 from  "../img/portfolio/500x375/other/bloom-.jpg";
import image8thumb from  "../img/portfolio/150x150/other/bloom-.jpg";

import image9 from  "../img/portfolio/500x375/other/bloom-balcony.jpg";
import image9thumb from  "../img/portfolio/150x150/other/bloom-balcony.jpg";

import image10 from  "../img/portfolio/500x375/other/bloom-curved-doorway.jpg";
import image10thumb from  "../img/portfolio/150x150/other/bloom-curved-doorway.jpg";

import image11 from  "../img/portfolio/500x375/other/bloom-david-at-bar.jpg";
import image11thumb from  "../img/portfolio/150x150/other/bloom-david-at-bar.jpg";

import image12 from  "../img/portfolio/500x375/other/bloom-flooring.jpg";
import image12thumb from  "../img/portfolio/150x150/other/bloom-flooring.jpg";


import image14 from  "../img/portfolio/500x375/other/bloom-large-stone-fireplace.jpg";
import image14thumb from  "../img/portfolio/150x150/other/bloom-large-stone-fireplace.jpg";

import image15 from  "../img/portfolio/500x375/other/bloom-man-cave-counter.jpg";
import image15thumb from  "../img/portfolio/150x150/other/bloom-man-cave-counter.jpg"

import image16 from  "../img/portfolio/500x375/other/bloom-nice-bar-shot.jpg";
import image16thumb from  "../img/portfolio/150x150/other/bloom-nice-bar-shot.jpg"

import image17 from  "../img/portfolio/500x375/other/bloom-nice-fireplace-shot.jpg";
import image17thumb from  "../img/portfolio/150x150/other/bloom-nice-fireplace-shot.jpg"

import image18 from  "../img/portfolio/500x375/other/bloom-nook.jpg";
import image18thumb from  "../img/portfolio/150x150/other/bloom-nook.jpg"



import image20 from  "../img/portfolio/500x375/other/bloom-stone-alcove.jpg";
import image20thumb from  "../img/portfolio/150x150/other/bloom-stone-alcove.jpg"

import image21 from  "../img/portfolio/500x375/other/bloom-stone-bar-wall.jpg";
import image21thumb from  "../img/portfolio/150x150/other/bloom-stone-bar-wall.jpg"

import image22 from  "../img/portfolio/500x375/other/bloom-stone-wall.jpg";
import image22thumb from  "../img/portfolio/150x150/other/bloom-stone-wall.jpg"

import image23 from  "../img/portfolio/500x375/other/bloom-stone-wood-tile.jpg";
import image23thumb from  "../img/portfolio/150x150/other/bloom-stone-wood-tile.jpg"

import image24 from  "../img/portfolio/500x375/other/bloom-T-shaped-bar.jpg";
import image24thumb from  "../img/portfolio/150x150/other/bloom-T-shaped-bar.jpg"



import image26 from  "../img/portfolio/500x375/other/bloom-wine-cellar.jpg";
import image26thumb from  "../img/portfolio/150x150/other/bloom-wine-cellar.jpg"

import image27 from  "../img/portfolio/500x375/other/bloom-wine-floor.jpg";
import image27thumb from  "../img/portfolio/150x150/other/bloom-wine-floor.jpg"

import image28 from  "../img/portfolio/500x375/other/David-pensive-look.jpg";
import image28thumb from  "../img/portfolio/150x150/other/David-pensive-look.jpg"

import image29 from  "../img/portfolio/500x375/other/IMG_1174.jpg";
import image29thumb from  "../img/portfolio/150x150/other/IMG_1174.jpg"

import image30 from  "../img/portfolio/500x375/other/IMG_1175.jpg";
import image30thumb from  "../img/portfolio/150x150/other/IMG_1175.jpg"

import image31 from  "../img/portfolio/500x375/other/IMG_1176.jpg";
import image31thumb from  "../img/portfolio/150x150/other/IMG_1176.jpg"

import image32 from  "../img/portfolio/500x375/other/IMG_1177.jpg";
import image32thumb from  "../img/portfolio/150x150/other/IMG_1177.jpg"

import image33 from  "../img/portfolio/500x375/other/IMG_1178.jpg";
import image33thumb from  "../img/portfolio/150x150/other/IMG_1178.jpg"

import image34 from  "../img/portfolio/500x375/other/IMG_1180.jpg";
import image34thumb from  "../img/portfolio/150x150/other/IMG_1180.jpg"

import image35 from  "../img/portfolio/500x375/other/IMG_1181.jpg";
import image35thumb from  "../img/portfolio/150x150/other/IMG_1181.jpg"

import image36 from  "../img/portfolio/500x375/other/IMG_1182.jpg";
import image36thumb from  "../img/portfolio/150x150/other/IMG_1182.jpg"

import image37 from  "../img/portfolio/500x375/other/IMG_1183.jpg";
import image37thumb from  "../img/portfolio/150x150/other/IMG_1183.jpg"

import image38 from  "../img/portfolio/500x375/other/IMG_1184.jpg";
import image38thumb from  "../img/portfolio/150x150/other/IMG_1184.jpg"

import image39 from  "../img/portfolio/500x375/other/IMG_1185.jpg";
import image39thumb from  "../img/portfolio/150x150/other/IMG_1185.jpg"

import image40 from  "../img/portfolio/500x375/other/IMG_1187.jpg";
import image40thumb from  "../img/portfolio/150x150/other/IMG_1187.jpg"

import image41 from  "../img/portfolio/500x375/other/IMG_1188.jpg";
import image41thumb from  "../img/portfolio/150x150/other/IMG_1188.jpg"

import image42 from  "../img/portfolio/500x375/other/IMG_1189.jpg";
import image42thumb from  "../img/portfolio/150x150/other/IMG_1189.jpg"

import image43 from  "../img/portfolio/500x375/other/IMG_1190.jpg";
import image43thumb from  "../img/portfolio/150x150/other/IMG_1190.jpg"

import image44 from  "../img/portfolio/500x375/other/IMG_1774.jpg";
import image44thumb from  "../img/portfolio/150x150/other/IMG_1774.jpg"

import image45 from  "../img/portfolio/500x375/other/IMG_2192.jpg";
import image45thumb from  "../img/portfolio/150x150/other/IMG_2192.jpg"


import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


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
      },

            {
        original: image14,
        thumbnail: image14thumb
      },
            {
        original: image15,
        thumbnail: image15thumb
      },
            {
        original: image16,
        thumbnail: image16thumb
      },
            {
        original: image17,
        thumbnail: image17thumb
      },
            {
        original: image18,
        thumbnail: image18thumb
      },

            {
        original: image20,
        thumbnail: image20thumb
      },
            {
        original: image21,
        thumbnail: image21thumb
      },
        {
        original: image22,
        thumbnail: image22thumb
      },
          {
        original: image23,
        thumbnail: image23thumb
      },
            {
        original: image24,
        thumbnail: image24thumb
      },

            {
        original: image26,
        thumbnail: image26thumb
      },
            {
        original: image27,
        thumbnail: image27thumb
      },
            {
        original: image28,
        thumbnail: image28thumb
      },
            {
        original: image29,
        thumbnail: image29thumb
      },
            {
        original: image30,
        thumbnail: image30thumb
      },
            {
        original: image31,
        thumbnail: image31thumb
      },
            {
        original: image32,
        thumbnail: image32thumb
      },
            {
        original: image33,
        thumbnail: image33thumb
      },
      {
        original: image34,
        thumbnail: image34thumb
      },
            {
        original: image35,
        thumbnail: image35thumb
      },
            {
        original: image36,
        thumbnail: image36thumb
      },
            {
        original: image37,
        thumbnail: image37thumb
      },
            {
        original: image38,
        thumbnail: image38thumb
      },
            {
        original: image39,
        thumbnail: image39thumb
      },
            {
        original: image40,
        thumbnail: image41thumb
      },
            {
        original: image41,
        thumbnail: image41thumb
      },
           {
        original: image42,
        thumbnail: image42thumb
      },
            {
        original: image43,
        thumbnail: image43thumb
      },
            {
        original: image44,
        thumbnail: image44thumb
        },
         {
        original: image45,
        thumbnail: image45thumb
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