/**
 * Slideshow - a basic image slideshow example using react-templates
 *
 * render image tags in repeat
 * add event handling code
 * add animation
 * make data driven
 *
 */
import React, { Component } from 'react';
import template from './Slideshow.rt';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
require('../assets/style.scss');

module.exports = React.createClass({
  displayName: 'Slideshow',
  mixins: [LinkedStateMixin],
  getInitialState: function() {

    this.images =
     [{id: 0, src: 'src/assets/images/wa-ferry.jpg'},
      {id: 1, src: 'src/assets/images/low-tide.jpg'},
      {id: 2, src: 'src/assets/images/fish.jpg'},
      {id: 3, src: 'src/assets/images/liguria.jpg'},
      {id: 4, src: 'src/assets/images/londra-hotel.jpg'}];

    return { slideIndex: 0, images: this.images};
  },
  componentDidMount: function(){
    this.showSlide(this.state.slideIndex);
  },
  showNextSlide(){
    this.state.slideIndex++;
    this.showSlide(this.state.slideIndex);
  },
  showPrevSlide(){
    this.state.slideIndex--;
    this.showSlide(this.state.slideIndex);
  },
  showSlide(index) {

    let slides = document.getElementsByClassName("slides");

    if (index > slides.length-1) {
      this.state.slideIndex = 0;
    } else if (index < 0) {
      this.state.slideIndex = slides.length-1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.state.slideIndex].style.display = "block";
  },
  render: template
});
