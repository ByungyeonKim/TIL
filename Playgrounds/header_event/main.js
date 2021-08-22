'use strict';
const header = document.querySelector('header');

function scrollEvent() {
  let lastScrollTop = 8;

  window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.transform = 'translateY(-68px)';
    } else {
      header.style.transform = 'translateY(0px)';
    }

    if (scrollTop > 0) {
      header.style.backgroundColor = '#fff';
    } else {
      header.style.backgroundColor = 'transparent';
      scrollTop = 8;
    }

    lastScrollTop = scrollTop;
  });
}

scrollEvent();
