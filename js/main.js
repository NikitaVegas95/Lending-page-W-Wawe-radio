$(function (){
  $(".accordion") .accordion({
    heightStyle: "content",
    active: 0,
    collapsible: true
  });
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const headerEnableNaw = document.querySelector('.btn-svg-enable-naw'),
      headerDisableNaw = document.querySelector('.btn-svg-disable-naw'),
      headerBtnNaw = document.querySelector('.header__btn-bottom_naw'),
      headerEnableArchive = document.querySelector('.btn-svg-enable-archive'),
      headerDisableArchive = document.querySelector('.btn-svg-disable-archive'),
      headerBtnArchive = document.querySelector('.header__btn-bottom_archive'),
      headerNavTop = document.querySelector('.header__nav-top'),
      burger = document.querySelector('.burger'),
      header = document.querySelector('.header'),
      burgerLineMenuClose = document.querySelector('.burger-line-menu');


      headerBtnNaw.addEventListener('click', function () {
        headerEnableNaw.classList.toggle('btn-svg-disable-naw');
        headerDisableNaw.classList.toggle('btn-svg-enable-naw');
      });

      headerBtnArchive.addEventListener('click', function () {
        headerEnableArchive.classList.toggle('btn-svg-disable-archive');
        headerDisableArchive.classList.toggle('btn-svg-enable-archive');
      });

      burger.addEventListener('click', function () {
        header.classList.toggle('header-active');
        headerNavTop.classList.toggle('open');
        burgerLineMenuClose.classList.toggle('burger-line_close-menu')
      });

const mediaQuery = window.matchMedia('(max-width: 560px)')

      if (mediaQuery.matches) {
        const burger = document.querySelector('.burger'),
              headerNavBottom = document.querySelector('.header__nav-bottom')
              headerBottom = document.querySelector('.header__bottom');

        burger.addEventListener('click', function () {
          headerNavBottom.classList.toggle('open-bottom');
          headerBottom.classList.toggle('header__bottom_bg');
        });
      }
