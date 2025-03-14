const swiper = new Swiper('.section-clients__swiper', {
  // Optional parameters
  direction: 'horizontal',
  simulateTouch: true,
  loop: false,

  breakpoints: {

    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    }

  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // pagination: {
  //   el: '.swiper-pagination',
  // },

});

const swiperText = new Swiper('.section-reviews__text', {
  // Optional parameters
  direction: 'horizontal',
  simulateTouch: true,
  loop: false,

  breakpoints: {

    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    }

  },

});


const swiperVideo = new Swiper('.section-reviews__video', {
  // Optional parameters
  direction: 'horizontal',
  simulateTouch: true,
  loop: false,

  breakpoints: {

    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }

  },
});

const swiperWork = new Swiper('.section-work__swiper', {
  // Optional parameters
  direction: 'horizontal',
  simulateTouch: true,
  loop: false,

  breakpoints: {

    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    1200: {
      slidesPerView: 1,
    }
  },

  pagination: {
    el: '.swiper-pagination',
  },

});

const items = document.querySelectorAll('.section-faq__item');

items.forEach(item => {
  const header = item.querySelector('.section-faq__h3');
  header.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

document.querySelectorAll('.section-tabs__btn').forEach(function (Tabs) {
  Tabs.addEventListener('click', function (event) {
    let el = this
    el.classList.add('section-tabs__btn_active')
    document.querySelectorAll('.section-tabs__article').forEach(item => {
      if (item != el) {
        item.classList.remove('section-tabs__article_active')
      }
    })
    document.querySelectorAll('.section-tabs__btn').forEach(item => {
      if (item != el) {
        item.classList.remove('section-tabs__btn_active')
      }
    })
    console.log(document.querySelectorAll('.section-tabs__article'))
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.section-tabs__article').forEach(function (TabsContent) {
      TabsContent.classList.remove('section-tabs__article_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('section-tabs__article_active')
    console.log(event.currentTarget.dataset.path)
  })
})