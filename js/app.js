/* #Home Grid
  ======================================================= */
const body = document.querySelector('body');
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

// Message Modal Handler
if (homeGrid) {
  const gridItems = homeGrid.querySelectorAll('.grid-item');

  gridItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (!e.target.closest('.like')) {
        const modal = document.querySelector(item.dataset.modal);

        if (modal) {
          modal.classList.toggle('show');
          body.classList.toggle('no-scroll');
        }
      }
    });
  });
}

// Modal Close
const messageModals = document.querySelectorAll('.message-modal');

if (messageModals) {
  messageModals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.closest('.modal-close')) {
        modal.classList.toggle('show');
        body.classList.toggle('no-scroll');
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
      ad.style.gridRow = rowNum + " / span 2";
    }
  });
}

/* #Message Create
  ======================================================= */
let thumbs = new Swiper(".thumbs .swiper-container", {
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 7.5
    },
    1024: {
      slidesPerView: 9
    }
  }
});

let gallery = new Swiper(".gallery .swiper-container", {
  spaceBetween: 10,
  thumbs: {
    swiper: thumbs,
  },
  effect: 'fade'
});

// Attach color class to text input
gallery.on('slideChangeTransitionStart', function () {
  const slideText = document.querySelector('.gallery .swiper-slide-active .text');
  const textInput = document.querySelector('.gallery .text-input');

  textInput.classList.remove(textInput.classList[1]);

  textInput.classList.add(slideText.classList[1]);
});

/* #Form Page Modal
  ======================================================= */
const formModalToggler = document.querySelector('.form-page-modal-toggler');
const formModals = document.querySelectorAll('.form-page-modal');

if (formModalToggler) {
  formModalToggler.addEventListener('click', (e) => {
    e.preventDefault();
    
    const modal = document.querySelector(formModalToggler.dataset.modal);
    
    if (modal) {
      modal.classList.add('show');
      body.classList.add('no-scroll');
    }
  });
}

if (formModals) {
  formModals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (!e.target.closest('.container')) {
        modal.classList.remove('show');
      body.classList.remove('no-scroll');
      }
    });
  });
}