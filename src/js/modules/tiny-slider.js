// src/initTinySlider.js

import { tns } from 'tiny-slider';

export default function initTinySlider() {
  // init slider 1
  const sliderProduct = document.querySelectorAll('.slider-product');
  if (sliderProduct.length > 0) {
    sliderProduct.forEach(sliderElement => {
      tns({
        container: sliderElement,
        items: 1,
        autoplay: true,
        rewind: true,
        nav: false,
        controls: false,
        autoplayButtonOutput: false,
        edgePadding: 18,
        gutter: 9,
        center: true,
      });
    });
  }

  // init slider 2
  const slider2Product = document.querySelectorAll('.slider-2-product');
  if (slider2Product.length > 0) {
    slider2Product.forEach(sliderElement => {
      tns({
        container: sliderElement,
        items: 1,
        autoplay: true,
        rewind: true,
        nav: false,
        controls: false,
        autoplayButtonOutput: false,
        edgePadding: 18,
        gutter: 9,
      });
    });
  }

  const sliderSelling = document.querySelectorAll('.slider-selling');
  if (sliderSelling.length > 0) {
    sliderSelling.forEach(sliderElement => {
      tns({
        container: sliderElement,
        items: 1,
        autoplay: true,
        rewind: true,
        nav: false,
        controls: false,
        autoplayButtonOutput: false,
        edgePadding: 18,
        gutter: 9,
      });
    });
  }
}
