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


let headerEnableNaw = document.querySelector('.btn-svg-enable-naw'),
    headerDisableNaw = document.querySelector('.btn-svg-disable-naw'),
    headerBtnNaw = document.querySelector('.header__btn-bottom_naw'),
    headerEnableArchive = document.querySelector('.btn-svg-enable-archive'),
    headerDisableArchive = document.querySelector('.btn-svg-disable-archive'),
    headerBtnArchive =document.querySelector('.header__btn-bottom_archive');


    headerBtnNaw.addEventListener('click', function () {
      headerEnableNaw.classList.toggle('btn-svg-disable-naw');
      headerDisableNaw.classList.toggle('btn-svg-enable-naw');
    });

    headerBtnArchive.addEventListener('click', function () {
      headerEnableArchive.classList.toggle('btn-svg-disable-archive');
      headerDisableArchive.classList.toggle('btn-svg-enable-archive');
    });
