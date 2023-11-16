/* mobile menu start */
const mobileMenu = document.getElementById('mobileMenu')
const menuButton = document.querySelector('.menu-button')
const header = document.querySelector('.header')
const html = document.querySelector('html')
const menuClose = document.querySelectorAll('.close-menu')

mobileMenu.addEventListener('show.bs.offcanvas', event => {
  const headerTop = (header.offsetTop + header.offsetHeight) - html.scrollTop
  mobileMenu.style.top = headerTop + 'px'
  menuButton.classList.add('is-active')
  header.classList.add('z-1050')
})

mobileMenu.addEventListener('hide.bs.offcanvas', event => {
  menuButton.classList.remove('is-active')
  header.classList.remove('z-1050')
})

mobileMenu.querySelectorAll('summary').forEach(element => {
  element.addEventListener('click', (e) => {
    const isOpen = e.currentTarget.parentElement.classList.contains('submenu-open')
    if (!isOpen) {
      e.currentTarget.parentElement.closest('li').classList.add('submenu-open')
    }
  })
})

menuClose.forEach(element => {
  element.addEventListener('click', (e) => {
    const parentli = e.currentTarget.closest('li')
    if (parentli.classList.contains('submenu-open')) {
      parentli.classList.remove('submenu-open')
    }
  })
})

/* mobile menu end */

/* home slider start */
if (document.querySelector('.homeSlider')) {
  const homeSlider = new window.Swiper('.homeSlider', {
    loop: true,
    fadeEffect: { crossFade: true },
    effect: 'fade',
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.homeSlider .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })
}
document.addEventListener('lazybeforeunveil', function (e) {
  const bg = e.target.getAttribute('data-bg')
  if (bg) {
    e.target.style.backgroundImage = 'url(' + bg + ')'
  }
})
/* home slider end */

/* product gallery start */
if (document.querySelector('.product-thumbs') && document.querySelector('.product-gallery')) {
  const productThumbs = new window.Swiper('.product-thumbs', {
    centeredSlides: false,
    loop: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        direction: 'horizontal',
        spaceBetween: 0,
        slidesPerView: 'auto',
        loopedSlides: 1
      }

    }
  })

  const productSlider = new window.Swiper('.product-gallery', {
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    direction: 'horizontal',
    loopedSlides: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    resizeObserver: true,
    thumbs: {
      swiper: productThumbs
    }

  })

  window.Fancybox.bind('[data-fancybox="gallery"]:not(.swiper-slide-duplicate)', {
    Images: {
      zoom: false
    },
    Toolbar: {
      display: {
        left: ['infobar'],
        middle: [
          'zoomIn',
          'zoomOut'
        ],
        right: ['fullscreen', 'thumbs', 'close', 'counter']
      }
    },
    Thumbs: {
      type: 'classic'
    },
    on: {
      close: (fancybox, slide) => {
        const index = fancybox.getSlide().index
        productSlider.slideToLoop(index)
      }
    }
  })
}

/* product gallery end */

/* nice select */
if (document.querySelector('.nice-select')) {
  document.querySelectorAll('.nice-select').forEach(element => {
    window.NiceSelect.bind(element)
  })
}
/* nice select end */

/* video banner start */
if (document.querySelector('.btn-play')) {
  document.querySelector('.btn-play').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.video-banner').classList.add('active')
  })
}
/* video banner end */

/* instafeed start */
if (document.querySelector('.instaswiper')) {
  const instaSwiper = new window.Swiper('.instaswiper', {
    loop: true,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 2.2,
        slidesPerGroup: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  })
}
/* instafeed end */

/* color swatch start */
if (document.querySelector('.color-swatch')) {
  document.querySelectorAll('.color-swatch input').forEach(element => {
    element.addEventListener('change', (e) => {
      document.querySelectorAll('.color-swatch li').forEach(item => {
        if (item !== this) item.classList.remove('active')
      })
      e.currentTarget.closest('li').classList.add('active')
    })
  })
}
/* color swatch end */

/* testimonial slider start */
if (document.querySelector('.testi-slider')) {
  const testiSlider = new window.Swiper('.testi-slider', {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      992: {
        loopedSlides: 3,
        slidesPerView: 3,
        spaceBetween: 40
      }
    }

  })
}
/* testimonial slider end */

/* related products start */
if (document.querySelector('.relatedSwiper')) {
  const relatedSwiper = new window.Swiper('.relatedSwiper', {
    loop: true,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        slidesPerGroup: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  })
}
/* related products end */

/* checkout start */
if (document.querySelector('.checkout-tabs')) {
  document.querySelector('.btn-next').addEventListener('click', function () {
    const tabEl = document.querySelector('.checkout-tabs button[data-bs-toggle="tab"].active')
    const index = parseFloat(tabEl.dataset.id) + 1
    if (index < 3) {
      const tabElement = document.querySelectorAll('#myTab li button')[index]
      const lastTab = new window.bootstrap.Tab(tabElement)
      lastTab.show()
    }
  })
}

if (document.querySelector('.quantity')) {
  document.querySelectorAll('.quantity').forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      const inputTag = e.currentTarget.querySelector('.qty')
      if (inputTag) {
        let value = inputTag.value ? parseInt(inputTag.value, 10) : 0
        const max = inputTag.dataset.max || 100
        const min = inputTag.dataset.min || 1
        const step = inputTag.dataset.step || 1
        if (e.target.classList.contains('plus')) {
          value = value + step <= max ? value + step : max
        } else {
          value = value - step >= min ? value - step : min
        }
        inputTag.value = value
      }
    })
  })
}

/* checkout end */
