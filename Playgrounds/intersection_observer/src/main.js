'use strict';

const sectionOne = document.querySelector('.section1');
const sections = document.querySelectorAll('section');

const options = {
  root: null, // 기본값, 뷰포트를 뜻함
  threshold: 0.3, // 대상 요소의 30%만큼 보이면 콜백 실행
  rootMargin: '0px 0px 0px 0px', // 반드시 px 또는 %로 표기
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('inverse');
    // 대상 요소 observe 중단
    observer.unobserve(entry.target);
  });
}, options);

// observer.observe(sectionOne);

sections.forEach((section) => {
  observer.observe(section);
});
