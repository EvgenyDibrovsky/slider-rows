import SmoothScroll from 'smooth-scroll';

export default function initSmoothAnchor() {
  new SmoothScroll('a[href*="#"]', {
    speed: 200,
    speedAsDuration: false,
    easing: 'easeInOutQuint',
    offset: 0,
    updateURL: true,
    popstate: false,
    emitEvents: true,
  });
}
