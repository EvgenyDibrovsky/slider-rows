import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';

export default function initScrollmagicAnimate() {
  // if (window.innerWidth < 1280) {
  //   return;
  // }
  const controller = new ScrollMagic.Controller();

  // hero-section-hero-animate
  new ScrollMagic.Scene({
    triggerElement: '.hero-section-hero-animate',
    triggerHook: 0.5,
    duration: '100%',
  })
    .on('progress', function (event) {
      const scaleValue = 1 + event.progress * 0.1;
      gsap.to('.hero-section-hero-animate .bg-hero-animate', { scale: scaleValue, duration: 0 });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-hero-animate',
    triggerHook: 0.5,
    duration: '100%',
  })
    .on('progress', function (event) {
      const scaleValue = 1 + event.progress * 0.1;
      gsap.to('.product-section-hero-animate .bg-product-section-hero-animate', {
        scale: scaleValue,
        duration: 0,
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-hero-animate',
    triggerHook: 1,
    duration: '100%',
  })
    .on('progress', function (event) {
      const scaleValue = 0.8 + event.progress * 0.2;
      const opacityValue = event.progress;

      gsap.to('.product-section-hero-animate .title-product-section-hero-animate', {
        scale: scaleValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })

    .addTo(controller);

  // product-section-1-animate;
  new ScrollMagic.Scene({
    triggerElement: '.product-section-1-animate',
    duration: '100%',
    triggerHook: 0.9,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.product-section-1-animate .text-block-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-1-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.product-section-1-animate .image-1-product-section-1-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-1-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 400;
      const opacityValue = event.progress;
      gsap.to('.product-section-1-animate .image-2-product-section-1-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-1-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 600;
      const opacityValue = event.progress;
      gsap.to('.product-section-1-animate .image-3-product-section-1-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  // product-section-2-animate;
  new ScrollMagic.Scene({
    triggerElement: '.product-section-2-animate',
    duration: '100%',
    triggerHook: 0.9,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.product-section-2-animate .text-block-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-2-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.product-section-2-animate .image-1-product-section-2-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-2-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 400;
      const opacityValue = event.progress;
      gsap.to('.product-section-2-animate .image-2-product-section-2-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-2-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 600;
      const opacityValue = event.progress;
      gsap.to('.product-section-2-animate .image-3-product-section-2-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  // product-section-3-animate;
  new ScrollMagic.Scene({
    triggerElement: '.product-section-3-animate',
    duration: '100%',
    triggerHook: 0.9,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.product-section-3-animate .text-block-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-3-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 400;
      const opacityValue = event.progress;
      gsap.to('.product-section-3-animate .image-product-section-3-animate ', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  // product-section-4-animate;
  new ScrollMagic.Scene({
    triggerElement: '.product-section-4-animate',
    duration: '100%',
    triggerHook: 0.9,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.product-section-4-animate .text-block-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-4-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 400;
      const opacityValue = event.progress;
      gsap.to('.product-section-4-animate .image-block-product-section-4-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.product-section-4-animate',
    triggerHook: 1,
    duration: '100%',
  })
    .on('progress', function (event) {
      const scaleValue = 0.8 + event.progress * 0.2;
      const opacityValue = event.progress;

      gsap.to('.product-section-4-animate .title-product-section-4-animate', {
        scale: scaleValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  // sales-section-animate;
  new ScrollMagic.Scene({
    triggerElement: '.sales-section-animate',
    duration: '100%',
    triggerHook: 0.9,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.sales-section-animate .text-block-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.sales-section-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.sales-section-animate .image-1-sales-section-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.sales-section-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 400;
      const opacityValue = event.progress;
      gsap.to('.sales-section-animate .image-2-sales-section-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.sales-section-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 600;
      const opacityValue = event.progress;
      gsap.to('.sales-section-animate .image-3-sales-section-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  // szkolenie-section-hero-animate;
  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-hero-animate',
    triggerHook: 0.5,
    duration: '100%',
  })
    .on('progress', function (event) {
      const scaleValue = 1 + event.progress * 0.1;
      gsap.to('.szkolenie-section-hero-animate .bg-szkolenie-section-hero-animate', {
        scale: scaleValue,
        duration: 0,
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-hero-animate',
    triggerHook: 1,
    duration: '100%',
  })
    .on('progress', function (event) {
      const scaleValue = 0.8 + event.progress * 0.2;
      const opacityValue = event.progress;

      gsap.to('.szkolenie-section-hero-animate .title-szkolenie-section-hero-animate', {
        scale: scaleValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  // szkolenie-section-1-animate;
  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-1-text-block-animate',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 50;
      const opacityValue = event.progress;
      gsap.to('.szkolenie-section-1-text-block-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-1-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 100;
      const opacityValue = event.progress;
      gsap.to('.szkolenie-section-1-animate .image-1-szkolenie-section-1-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-1-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 300;
      const opacityValue = event.progress;
      gsap.to('.szkolenie-section-1-animate .image-2-szkolenie-section-1-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-1-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.szkolenie-section-1-animate .image-3-szkolenie-section-1-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  // szkolenie-section-2-animate;
  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-2-text-block-animate',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 50;
      const opacityValue = event.progress;
      gsap.to('.szkolenie-section-2-text-block-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-2-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 100;
      const opacityValue = event.progress;
      gsap.to('.szkolenie-section-2-animate .image-1-szkolenie-section-2-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-2-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 200;
      const opacityValue = event.progress;
      gsap.to('.szkolenie-section-2-animate .image-2-szkolenie-section-2-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-2-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 300;
      const opacityValue = event.progress;
      gsap.to('.szkolenie-section-2-animate .image-3-szkolenie-section-2-animate', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.szkolenie-section-2-animate ',
    duration: '100%',
    triggerHook: 1,
  })
    .on('progress', function (event) {
      const yValue = (1 - event.progress) * 300;
      const opacityValue = event.progress;
      gsap.to('.szkolenie-section-2-animate .image-3-szkolenie-section-2-animate-mob', {
        y: yValue,
        opacity: opacityValue,
        duration: 0,
        ease: 'none',
      });
    })
    .addTo(controller);

  // footer
  // new ScrollMagic.Scene({
  //   triggerElement: '.footer-animate',
  //   duration: '100%',
  //   triggerHook: 0.9,
  // })
  //   .on('progress', function (event) {
  //     const opacityValue = event.progress;

  //     gsap.to('.footer-animate .block-footer-animate', {
  //       opacity: opacityValue,
  //       duration: 0,
  //       ease: 'none',
  //     });
  //   })
  //   .addTo(controller);
}
