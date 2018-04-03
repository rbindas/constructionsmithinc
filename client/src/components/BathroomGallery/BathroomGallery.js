import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import { Button } from 'react-bootstrap';


import image1 from  "../img/portfolio/800x600/bathrooms/angie-black-shower-columns.jpg";
import image1thumb from  "../img/portfolio/800x600/bathrooms/angie-black-shower-columns.jpg";


import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class BathroomGallery extends Component {


  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const bathroomImages = [
      {
        original: image1,
        thumbnail: image1thumb,
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
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