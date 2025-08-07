import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function initGsapAnimate() {
  let panel = document.querySelector('.wrapper-sliders-mobile .panel');

  function initScrollAnimation(containerSelector, sliderClass) {
    let sections = gsap.utils.toArray(`${containerSelector} .panel`);
    let container = document.querySelector(containerSelector);

    if (sections.length === 0) return;

    const scrollDistance = container.offsetWidth * sections.length;

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: `+=${scrollDistance}`,
        invalidateOnRefresh: true,
      },
    });

    animateElements(scrollTween, sliderClass);
  }

  // function initMobileSlider() {
  //   let container = document.querySelector('.wrapper-sliders-mobile');

  //   if (!container || !panel) return;

  //   const scrollDistance = panel.scrollWidth - window.innerWidth;

  //   gsap.to(panel, {
  //     x: -scrollDistance,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: container,
  //       pin: true,
  //       scrub: 0.5,
  //       end: `+=${scrollDistance}`,
  //       invalidateOnRefresh: true,
  //       horizontal: true,
  //     },
  //   });
  // }

  function initMobileAnimations(sliderClass) {
    animateElements(null, sliderClass); // Запуск анимаций без скролла
  }

  function disableScrollAndEnableAnimationsOnMobile() {
    ScrollTrigger.getAll().forEach(trigger => {
      if (
        trigger.trigger &&
        (trigger.trigger.classList.contains('wrapper-sliders-2') ||
          trigger.trigger.classList.contains('wrapper-sliders-3'))
      ) {
        trigger.kill();  
      }
    });
  }

  function initAnimationsBasedOnScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) {
      initScrollAnimation('.wrapper-sliders', 'slider-1');
      initScrollAnimation('.wrapper-sliders-2', 'slider-2');
      initScrollAnimation('.wrapper-sliders-3', 'slider-3');
    } else {
      // initMobileSlider();
      initMobileAnimations('slider-2');  
      initMobileAnimations('slider-3');  
      disableScrollAndEnableAnimationsOnMobile();  
    }
  }

  function animateElements(scrollTween, sliderClass) {
    if (sliderClass === 'slider-1') {
      // Slide 1
      gsap.fromTo(
        '.text-block-slide-1-animate',
        { opacity: 0, y: '100' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-block-slide-1-animate',
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.text-decor-slide-1-animate',
        { opacity: 0 },
        {
          opacity: 1,

          scrollTrigger: {
            trigger: '.text-decor-slide-1-animate',
            containerAnimation: scrollTween,
            start: 'top top',
            end: 'bottom 95%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-1-slider-1-slide-1-animate',
        { opacity: 0, x: '100' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-1-slider-1-slide-1-animate',
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-2-slider-1-slide-1-animate',
        { opacity: 0, x: '200' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-2-slider-1-slide-1-animate',
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-3-slider-1-slide-1-animate',
        { opacity: 0, x: '300' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-3-slider-1-slide-1-animate',
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      // Slide 2
      gsap.fromTo(
        '.text-block-slide-2-animate',
        { opacity: 0, y: '200' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-block-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
      gsap.fromTo(
        '.text-decor-slide-2-animate',
        { opacity: 0, y: '-100%' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-decor-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top 80%',
            end: 'top 20%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-1-slider-1-slide-2-animate',
        { opacity: 0, x: '100' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-1-slider-1-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-2-slider-1-slide-2-animate',
        { opacity: 0, y: '200' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.image-2-slider-1-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-3-slider-1-slide-2-animate',
        { opacity: 0, y: '300' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.image-3-slider-1-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-4-slider-1-slide-2-animate',
        { opacity: 0, x: '50' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-4-slider-1-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 80%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
      gsap.fromTo(
        '.image-5-slider-1-slide-2-animate',
        { opacity: 0, x: '2' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-4-slider-1-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 80%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
      // Slide 3
      gsap.fromTo(
        '.text-decor-slide-3-animate',
        { opacity: 0, y: '-100%' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-decor-slide-3-animate',
            containerAnimation: scrollTween,
            start: 'left center',
            end: 'right center',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.text-block-slide-3-animate',
        { opacity: 0, y: '200' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-block-slide-3-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-1-slider-1-slide-3-animate',
        { opacity: 0, x: '200' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-1-slider-1-slide-3-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-2-slider-1-slide-3-animate',
        { opacity: 0, x: '100' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-2-slider-1-slide-3-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-3-slider-1-slide-3-animate',
        { opacity: 0, y: '100' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.image-3-slider-1-slide-3-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
      gsap.fromTo(
        '.image-4-slider-1-slide-3-animate',
        { opacity: 0, x: '100' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-4-slider-1-slide-3-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-5-slider-1-slide-3-animate',
        { opacity: 0, x: '-100' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-5-slider-1-slide-3-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
      // Slide 4
      gsap.fromTo(
        '.text-decor-slide-4-animate',
        { opacity: 0, y: '100%' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-decor-slide-4-animate',
            containerAnimation: scrollTween,
            start: 'top 80%',
            end: 'top 20%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
            duration: 5,
          },
        }
      );

      gsap.fromTo(
        '.text-block-slide-4-animate',
        { opacity: 0, y: '200' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-block-slide-4-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.text-2-block-slide-4-animate',
        { opacity: 0, y: '200' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-2-block-slide-4-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-1-slider-1-slide-4-animate',
        { opacity: 0, x: '100' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-1-slider-1-slide-4-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-2-slider-1-slide-4-animate',
        { opacity: 0, y: '-100' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.image-2-slider-1-slide-4-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-3-slider-1-slide-4-animate',
        { opacity: 0, x: '50' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-3-slider-1-slide-4-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 80%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-4-slider-1-slide-4-animate',
        { opacity: 0, y: '200' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.image-4-slider-1-slide-4-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }

    if (sliderClass === 'slider-2') {
      // Slider 2

      gsap.fromTo(
        '.text-block-slider-2-slide-1-animate',
        { opacity: 0, y: '50' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-block-slider-2-slide-1-animate',
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.icon-block-slider-2-slide-1-animate',
        { opacity: 0, x: '-100' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.icon-block-slider-2-slide-1-animate',
            start: 'top bottom',
            end: 'top 60%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-slider-2-slide-1-animate-mob',
        { opacity: 0, scale: 0.7, x: '100' },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-slider-2-slide-1-animate-mob',
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.text-block-1-slider-2-slide-2-animate',
        { opacity: 0, y: '50' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-block-1-slider-2-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.text-block-2-slider-2-slide-2-animate',
        { opacity: 0, y: '50' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-block-2-slider-2-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.text-block-3-slider-2-slide-2-animate',
        { opacity: 0, y: '50' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-block-3-slider-2-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.block-icons-1-slider-2-slide-1-animate',
        { opacity: 0, y: '50' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.block-icons-1-slider-2-slide-1-animate',
            start: 'top bottom',
            end: 'top 60%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.image-slider-2-slide-1-animate',
        { opacity: 0, x: '200' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.image-slider-2-slide-1-animate',
            start: 'top bottom',
            end: 'top 60%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }

    if (sliderClass === 'slider-3') {
      // Slider 3
      gsap.fromTo(
        '.text-block-1-slider-3-slide-1-animate',
        { opacity: 0, y: '50' },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text-block-1-slider-3-slide-1-animate',
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.text-block-2-slider-3-slide-1-animate',
        { opacity: 0, x: '200' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.text-block-2-slider-3-slide-1-animate',
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.text-block-1-slider-3-slide-2-animate',
        { opacity: 0, x: '100' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.text-block-1-slider-3-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.text-block-2-slider-3-slide-2-animate',
        { opacity: 0, x: '100' },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '.text-block-2-slider-3-slide-2-animate',
            containerAnimation: scrollTween,
            start: 'top bottom',
            end: 'top 50%',
            markers: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }
  }

  initAnimationsBasedOnScreenSize();

  // window.addEventListener('resize', () => {
  //   ScrollTrigger.refresh();
  //   initAnimationsBasedOnScreenSize();
  // });

  // window.addEventListener('scroll', () => {
  //   if (window.scrollY === 0) {
  //     ScrollTrigger.refresh();
  //   }
  // });
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
    if (panel) {
      gsap.set(panel, { width: panel.scrollWidth }); // Используем panel
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      ScrollTrigger.refresh();
    }
  });
}
