export default function sliderCustom({
  rootId = 'slider-custom',
  row1Id = 'slider-row-1',
  row2Id = 'slider-row-2',
  pagSelector = '.slider-pagination-btn',
  debug = false,
} = {}) {
  /* -------------------------------------------------- safety */
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    // Server‑side rendering guard
    return () => {};
  }

  const log = (...a) => debug && console.log('[slider]', ...a);

  /* -------------------------------------------------- DOM */
  const row1 = document.getElementById(row1Id);
  const row2 = document.getElementById(row2Id);
  const container = row1?.parentElement;
  const pagBtns = Array.from(document.querySelectorAll(pagSelector));

  if (!row1 || !row2 || !container) {
    console.error('[slider] required elements missing', { row1, row2, container });
    return () => {};
  }
  if (pagBtns.length < 2) {
    console.error('[slider] need at least 2 pagination buttons – found', pagBtns.length);
  }

  /* -------------------------------------------------- state */
  let isPointerDown = false;
  let startX = 0;
  let startY = 0;
  let startOffset = 0;
  let currentOffset = 0;
  let bounds = calcBounds();

  /* -------------------------------------------------- helpers */
  function calcBounds() {
    const vw = container.clientWidth;
    return {
      row1Min: Math.min(vw - row1.scrollWidth, 0),
      row1Max: 0,
      row2Min: Math.min(vw - row2.scrollWidth, 0),
      row2Max: 0,
    };
  }
  const clamp = (v, mn, mx) => Math.min(Math.max(v, mn), mx);

  /* -------------------------------------------------- UI */
  function update(offset, animate = false) {
    bounds = bounds || calcBounds();
    offset = clamp(offset, bounds.row1Min, bounds.row1Max);

    const span1 = bounds.row1Max - bounds.row1Min || 1;
    const progress = (offset - bounds.row1Min) / span1; // 0…1
    const row2Offset = bounds.row2Min + (1 - progress) * (bounds.row2Max - bounds.row2Min);

    [row1, row2].forEach(el => {
      el.style.transition = animate ? 'transform 0.4s ease' : 'none';
    });

    row1.style.transform = `translateX(${offset}px)`;
    row2.style.transform = `translateX(${row2Offset}px)`;

    pagBtns.forEach(b => b.classList.remove('active'));
    if (offset === bounds.row1Max) pagBtns[0]?.classList.add('active');
    if (offset === bounds.row1Min) pagBtns[1]?.classList.add('active');

    currentOffset = offset;
  }

  /* -------------------------------------------------- pointer */
  function onPointerDown(e) {
    if (e.button !== undefined && e.button !== 0) return; // ignore right/middle click
    isPointerDown = true;
    startX = e.clientX;
    startY = e.clientY;
    startOffset = currentOffset;
    setCursor('grabbing');
    e.preventDefault();
  }
  function onPointerMove(e) {
    if (!isPointerDown) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
      // user wants to scroll vertically – cancel dragging
      isPointerDown = false;
      setCursor('grab');
      return;
    }
    update(startOffset + dx);
  }
  function onPointerUp() {
    if (!isPointerDown) return;
    isPointerDown = false;
    setCursor('grab');
    // snap
    const middle = (bounds.row1Min + bounds.row1Max) / 2;
    const target = currentOffset < middle ? bounds.row1Min : bounds.row1Max;
    update(target, true);
  }
  function setCursor(c) {
    row1.style.cursor = row2.style.cursor = c;
  }

  /* -------------------------------------------------- images load */
  const images = Array.from(container.querySelectorAll('img'));
  Promise.all(
    images.map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise(res => {
            img.addEventListener('load', res, { once: true });
            img.addEventListener('error', res, { once: true });
          }),
    ),
  ).then(() => {
    bounds = calcBounds();
    update(0);
  });

  /* -------------------------------------------------- resize */
  let resizeRaf = 0;
  function onResize() {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => {
      bounds = calcBounds();
      update(currentOffset);
    });
  }
  function onResizeDelayed() {
    setTimeout(onResize, 120);
  }

  /* -------------------------------------------------- listeners */
  function addListeners() {
    [row1, row2].forEach(el => {
      el.addEventListener('pointerdown', onPointerDown);
      el.addEventListener('pointermove', onPointerMove);
      el.addEventListener('pointerup', onPointerUp);
      el.addEventListener('pointercancel', onPointerUp);
      el.addEventListener('dragstart', e => e.preventDefault());
      el.style.touchAction = 'pan-y';
      el.style.userSelect = 'none';
      el.style.cursor = 'grab';
    });
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResizeDelayed);
    pagBtns.forEach((btn, i) => btn.addEventListener('click', () => update(i === 0 ? bounds.row1Max : bounds.row1Min, true)));
  }
  function removeListeners() {
    [row1, row2].forEach(el => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
    });
    window.removeEventListener('resize', onResize);
    window.removeEventListener('orientationchange', onResizeDelayed);
    pagBtns.forEach((btn, i) => btn.removeEventListener('click', () => update(i === 0 ? bounds.row1Max : bounds.row1Min, true)));
  }

  addListeners();
  log('initialised');

  /* -------------------------------------------------- public api */
  return destroy;

  function destroy() {
    removeListeners();
    log('destroyed');
  }
}
