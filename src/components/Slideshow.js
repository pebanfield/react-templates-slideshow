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

    return { slideIndex: 1, images: this.images};
  },
  componentDidMount: function(){
    this.showDivs(this.state.slideIndex);
  },
  plusDivs(n){
    this.showDivs(this.state.slideIndex += n);
  },
  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {this.state.slideIndex = 1}
    if (n < 1) {this.state.slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.state.slideIndex-1].style.display = "block";
  },
  render: template
});
