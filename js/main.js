
//--------------------------accordion------------------------------------------

$(function (){
  $(".accordion") .accordion({
    heightStyle: "content",
    active: 0,
    collapsible: true
  });
})

//--------------------------swiper------------------------------------------
const mediaQuery560 = window.matchMedia('(max-width: 560px)');

const swiper = new Swiper('.swiper', {
  loop: true,
  breakpoints: {
    1025: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 18
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 5000,
  },
});

//--------------------------tabs------------------------------------------


let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element){
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) {
      element.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


//--------------------------main Js------------------------------------------

const headerEnableNaw = document.querySelector('.btn-svg-enable-naw'),
      headerDisableNaw = document.querySelector('.btn-svg-disable-naw'),
      headerBtnNaw = document.querySelector('.header__btn-bottom_naw'),
      headerEnableArchive = document.querySelector('.btn-svg-enable-archive'),
      headerDisableArchive = document.querySelector('.btn-svg-disable-archive'),
      headerBtnArchive = document.querySelector('.header__btn-bottom_archive'),
      headerNavTop = document.querySelector('.header__nav-top'),
      burger = document.querySelector('.burger'),
      header = document.querySelector('.header'),
      burgerLineMenuClose = document.querySelector('.burger-line-menu'),
      btnMobile = document.querySelector('.btn-320'),
      headerBottomBtns = document.querySelector('.header__bottom-btns'),
      headerNavBottom = document.querySelector('.header__bottom');


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
        burgerLineMenuClose.classList.toggle('burger-line_close-menu');
      });

      btnMobile.addEventListener('click', function () {
        headerBottomBtns.classList.toggle('header__bottom-btns_open');
        headerNavBottom.classList.toggle('header__bottom_after');
      })



      if (mediaQuery560.matches) {
        const burger = document.querySelector('.burger'),
              headerNavBottom = document.querySelector('.header__nav-bottom')
              headerBottom = document.querySelector('.header__bottom');

        burger.addEventListener('click', function () {
          headerNavBottom.classList.toggle('open-bottom');
          headerBottom.classList.toggle('header__bottom_bg');
        });
      }


const buttons = document.querySelectorAll('.podcast__btn')

      for (let button of buttons) {
        button.addEventListener("click", e => {
          let activeBtn = document.querySelector('button.pause');
          if (activeBtn && activeBtn !== e.target) {
            activeBtn.classList.remove('pause');
            button.classList.toggle('pause');
          }
          button.classList.toggle('pause');
        });
      }

document.querySelector('.podcast__more-btn').addEventListener('click', function () {
  let elements = document.getElementsByClassName('podcast__item');
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("podcasts__item_visible");
  }
});

document.querySelector('.podcast__more-btn').addEventListener('click', function () {
  document.querySelector('.podcast__more-btn').classList.toggle('podcasts-btns__btn--passive')
});
