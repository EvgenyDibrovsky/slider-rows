import smoothscroll from 'smoothscroll-for-websites';

export default function initSmoothScroll() {
  smoothscroll({
    animationTime: 1000,
    stepSize: 100,

    accelerationDelta: 20,
    accelerationMax: 3,

    keyboardSupport: true,
    arrowScroll: 100,

    touchpadSupport: true,
    fixedBackground: true,
  });
}
