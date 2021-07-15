/* #Home Grid
  ======================================================= */
const homeGrid = document.querySelector('.home-grid');

// Grid Item Handler
if (homeGrid) {
  const gridItems = homeGrid.querySelectorAll('.grid-item');

  gridItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.closest('.like')) {
        item.classList.toggle('liked');
      }
    });
  });
}

// Grid Add Handler
if (homeGrid) {
  const gridAds = homeGrid.querySelectorAll('.grid-item.ad');
  let rowNum = 3;

  gridAds.forEach((ad, index) => {
    if (index !== 0) {
      rowNum = rowNum + 4;
      ad.style.gridRow= rowNum + " / span 2";
    }
  });
}