/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/slider-custom.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider-custom.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sliderCustom)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function sliderCustom() {
  console.log('sliderCustom function called');
  var row1 = document.getElementById('slider-row-1');
  var row2 = document.getElementById('slider-row-2');
  var pagBtns = document.querySelectorAll('.slider-pagination-btn');
  console.log('Elements found:', {
    row1: !!row1,
    row2: !!row2,
    pagBtns: pagBtns.length
  });
  if (!row1 || !row2 || pagBtns.length < 2) {
    console.error('Required elements not found:', {
      row1: !!row1,
      row2: !!row2,
      pagBtns: pagBtns.length
    });
    return;
  }
  var container = row1.parentElement;
  if (!container) {
    console.error('Container not found');
    return;
  }
  console.log('Slider initialization successful');

  // iOS/Touch подсказки
  [row1, row2].forEach(function (el) {
    el.style.touchAction = 'pan-y'; // горизонталь наша, вертикаль — странице
    el.style.userSelect = 'none';
  });
  var isDragging = false;
  var isTouchPossible = false;
  var startX = 0,
    startY = 0;
  var startOffset = 0;
  var currentOffset = 0;
  window.sliderIsDragging = false;
  function getBounds() {
    if (!row1 || !row2 || !container) {
      console.error('Required elements not found in getBounds');
      return {
        row1Max: 0,
        row1Min: 0,
        row2Max: 0,
        row2Min: 0
      };
    }
    var row1Width = row1.scrollWidth;
    var row2Width = row2.scrollWidth;
    var visibleWidth = container.clientWidth; // точнее чем offsetWidth

    console.log('Dimensions:', {
      row1Width: row1Width,
      row2Width: row2Width,
      visibleWidth: visibleWidth
    });
    return {
      row1Max: 0,
      row1Min: Math.min(visibleWidth - row1Width, 0),
      row2Max: 0,
      row2Min: Math.min(visibleWidth - row2Width, 0)
    };
  }
  function updateRows(offset) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!row1 || !row2) {
      console.error('Rows not found in updateRows');
      return;
    }
    var b = getBounds();
    console.log('Bounds calculated:', b);

    // защищаемся от деления на 0
    var span1 = b.row1Max - b.row1Min || 1;
    offset = Math.max(Math.min(offset, b.row1Max), b.row1Min);
    var progress = (offset - b.row1Min) / span1;
    var row2Offset = b.row2Min + (1 - progress) * (b.row2Max - b.row2Min);
    var transition = animate ? 'transform 0.5s ease' : 'none';
    row1.style.transition = transition;
    row2.style.transition = transition;
    row1.style.transform = "translateX(".concat(offset, "px)");
    row2.style.transform = "translateX(".concat(row2Offset, "px)");
    currentOffset = offset;
    pagBtns.forEach(function (btn) {
      return btn.classList.remove('active');
    });
    if (offset === b.row1Max) pagBtns[0].classList.add('active');else if (offset === b.row1Min) pagBtns[1].classList.add('active');
  }

  // мышь
  function onMouseDown(e) {
    if (e.button !== 0) return;
    isDragging = true;
    startX = e.clientX;
    startOffset = currentOffset;
    row1.style.cursor = row2.style.cursor = 'grabbing';
    e.preventDefault();
  }
  function onMouseMove(e) {
    if (!isDragging) return;
    var dx = e.clientX - startX;
    if (Math.abs(dx) > 5) window.sliderIsDragging = true;
    updateRows(startOffset + dx);
  }
  function onMouseUp() {
    if (!isDragging) return;
    isDragging = false;
    setTimeout(function () {
      return window.sliderIsDragging = false;
    }, 100);
    row1.style.cursor = row2.style.cursor = 'grab';
  }

  // тач
  function onTouchStart(e) {
    if (e.touches.length !== 1) return;
    isTouchPossible = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    startOffset = currentOffset;
  }
  function onTouchMove(e) {
    if (!isTouchPossible) return;
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    var dx = x - startX;
    var dy = y - startY;
    if (!isDragging) {
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        isDragging = true;
        window.sliderIsDragging = true;
        row1.style.cursor = row2.style.cursor = 'grabbing';
      } else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
        isTouchPossible = false;
        return;
      } else {
        return;
      }
    }
    if (e.cancelable) e.preventDefault(); // iOS: звать только если можно
    updateRows(startOffset + dx);
  }
  function onTouchEnd() {
    if (isDragging) {
      isDragging = false;
      setTimeout(function () {
        return window.sliderIsDragging = false;
      }, 100);
      row1.style.cursor = row2.style.cursor = 'grab';
    }
    isTouchPossible = false;
  }
  [row1, row2].forEach(function (row) {
    row.style.cursor = 'grab';
    row.addEventListener('dragstart', function (e) {
      return e.preventDefault();
    });
    row.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    row.addEventListener('touchstart', onTouchStart, {
      passive: false
    });
    row.addEventListener('touchmove', onTouchMove, {
      passive: false
    });
    row.addEventListener('touchend', onTouchEnd);
    row.addEventListener('touchcancel', onTouchEnd);
  });

  // пагинация
  pagBtns.forEach(function (btn, idx) {
    btn.addEventListener('click', function () {
      window.sliderIsDragging = false;
      var b = getBounds();
      var target = idx === 0 ? b.row1Max : b.row1Min;
      updateRows(target, true);
    });
  });

  // дождаться картинок и первично позиционировать
  var imgs = container.querySelectorAll('img');
  console.log('Found images:', imgs.length);
  var waitImgs = _toConsumableArray(imgs).map(function (img, index) {
    console.log("Image ".concat(index + 1, " complete:"), img.complete, 'src:', img.src);
    if (img.complete) return Promise.resolve();
    return new Promise(function (res) {
      img.addEventListener('load', res, {
        once: true
      });
      img.addEventListener('error', function (e) {
        console.error("Image ".concat(index + 1, " failed to load:"), img.src, e);
        res(); // Продолжаем даже при ошибке
      }, {
        once: true
      });
    });
  });
  Promise.all(waitImgs)["finally"](function () {
    console.log('All images processed, initializing slider position');
    updateRows(0, false);
  });

  // пересчёт при ресайзе/ориентации
  window.addEventListener('resize', function () {
    return updateRows(currentOffset, false);
  });
  window.addEventListener('orientationchange', function () {
    // небольшая задержка, чтобы layout стабилизировался
    setTimeout(function () {
      return updateRows(currentOffset, false);
    }, 100);
  });
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _modules_slider_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider-custom */ "./src/js/modules/slider-custom.js");


// import initSubMenuLeft from './modules/sub-menu';
// import initGsapAnimate from './modules/gsapAnimate';
// import initScrollmagicAnimate from './modules/scrollmagicAnimate';
// import initSmoothScroll from './modules/smoothScroll';
// import initSmoothAnchor from './modules/smoothScrollAnchor';
// import initTinySlider from './modules/tiny-slider';
document.addEventListener('DOMContentLoaded', function () {
  // initSubMenuLeft();
  // initGsapAnimate();
  // initScrollmagicAnimate();
  // initSmoothScroll();
  // initSmoothAnchor();
  // initTinySlider();
  (0,_modules_slider_custom__WEBPACK_IMPORTED_MODULE_1__["default"])();
  console.log('first');
});
if (false) // removed by dead control flow
{}
})();

/******/ })()
;
//# sourceMappingURL=main.27b41e3b3c7f07cbd41f.js.map