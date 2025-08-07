import '../style.css';
import sliderCustom from './modules/slider-custom';
// import initSubMenuLeft from './modules/sub-menu';
// import initGsapAnimate from './modules/gsapAnimate';
// import initScrollmagicAnimate from './modules/scrollmagicAnimate';
// import initSmoothScroll from './modules/smoothScroll';
// import initSmoothAnchor from './modules/smoothScrollAnchor';
// import initTinySlider from './modules/tiny-slider';
document.addEventListener('DOMContentLoaded', () => {
  // initSubMenuLeft();
  // initGsapAnimate();
  // initScrollmagicAnimate();
  // initSmoothScroll();
  // initSmoothAnchor();
  // initTinySlider();
  sliderCustom();
  console.log('first');
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
