export default function sliderCustom() {
  console.log('sliderCustom function called');
  
  const row1 = document.getElementById('slider-row-1');
  const row2 = document.getElementById('slider-row-2');
  const pagBtns = document.querySelectorAll('.slider-pagination-btn');
  
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

  const container = row1.parentElement;
  if (!container) {
    console.error('Container not found');
    return;
  }
  
  console.log('Slider initialization successful');

  // iOS/Touch подсказки
  [row1, row2].forEach(el => {
    el.style.touchAction = 'pan-y'; // горизонталь наша, вертикаль — странице
    el.style.userSelect = 'none';
  });

  let isDragging = false;
  let isTouchPossible = false;
  let startX = 0, startY = 0;
  let startOffset = 0;
  let currentOffset = 0;

  window.sliderIsDragging = false;

  function getBounds() {
    if (!row1 || !row2 || !container) {
      console.error('Required elements not found in getBounds');
      return {
        row1Max: 0,
        row1Min: 0,
        row2Max: 0,
        row2Min: 0,
      };
    }
    
    const row1Width = row1.scrollWidth;
    const row2Width = row2.scrollWidth;
    const visibleWidth = container.clientWidth; // точнее чем offsetWidth
    
    console.log('Dimensions:', {
      row1Width,
      row2Width,
      visibleWidth
    });
    
    return {
      row1Max: 0,
      row1Min: Math.min(visibleWidth - row1Width, 0),
      row2Max: 0,
      row2Min: Math.min(visibleWidth - row2Width, 0),
    };
  }

  function updateRows(offset, animate = false) {
    if (!row1 || !row2) {
      console.error('Rows not found in updateRows');
      return;
    }
    
    const b = getBounds();
    console.log('Bounds calculated:', b);
    
    // защищаемся от деления на 0
    const span1 = (b.row1Max - b.row1Min) || 1;

    offset = Math.max(Math.min(offset, b.row1Max), b.row1Min);

    const progress = (offset - b.row1Min) / span1;
    const row2Offset = b.row2Min + (1 - progress) * (b.row2Max - b.row2Min);

    const transition = animate ? 'transform 0.5s ease' : 'none';
    row1.style.transition = transition;
    row2.style.transition = transition;
    row1.style.transform = `translateX(${offset}px)`;
    row2.style.transform = `translateX(${row2Offset}px)`;
    currentOffset = offset;

    pagBtns.forEach(btn => btn.classList.remove('active'));
    if (offset === b.row1Max) pagBtns[0].classList.add('active');
    else if (offset === b.row1Min) pagBtns[1].classList.add('active');
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
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) window.sliderIsDragging = true;
    updateRows(startOffset + dx);
  }
  function onMouseUp() {
    if (!isDragging) return;
    isDragging = false;
    setTimeout(() => window.sliderIsDragging = false, 100);
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

    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    const dx = x - startX;
    const dy = y - startY;

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
      setTimeout(() => window.sliderIsDragging = false, 100);
      row1.style.cursor = row2.style.cursor = 'grab';
    }
    isTouchPossible = false;
  }

  [row1, row2].forEach(row => {
    row.style.cursor = 'grab';
    row.addEventListener('dragstart', e => e.preventDefault());

    row.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    row.addEventListener('touchstart', onTouchStart, { passive: false });
    row.addEventListener('touchmove', onTouchMove, { passive: false });
    row.addEventListener('touchend', onTouchEnd);
    row.addEventListener('touchcancel', onTouchEnd);
  });

  // пагинация
  pagBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      window.sliderIsDragging = false;
      const b = getBounds();
      const target = idx === 0 ? b.row1Max : b.row1Min;
      updateRows(target, true);
    });
  });

  // дождаться картинок и первично позиционировать
  const imgs = container.querySelectorAll('img');
  console.log('Found images:', imgs.length);
  
  const waitImgs = [...imgs].map((img, index) => {
    console.log(`Image ${index + 1} complete:`, img.complete, 'src:', img.src);
    if (img.complete) return Promise.resolve();
    return new Promise((res) => {
      img.addEventListener('load', res, { once: true });
      img.addEventListener('error', (e) => {
        console.error(`Image ${index + 1} failed to load:`, img.src, e);
        res(); // Продолжаем даже при ошибке
      }, { once: true });
    });
  });
  
  Promise.all(waitImgs).finally(() => {
    console.log('All images processed, initializing slider position');
    updateRows(0, false);
  });

  // пересчёт при ресайзе/ориентации
  window.addEventListener('resize', () => updateRows(currentOffset, false));
  window.addEventListener('orientationchange', () => {
    // небольшая задержка, чтобы layout стабилизировался
    setTimeout(() => updateRows(currentOffset, false), 100);
  });
}
  