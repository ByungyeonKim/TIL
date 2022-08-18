'use strict';
import { setCookie, getCookie } from './cookie.js';

const modalWrapper = document.querySelector('.modal-wrapper');

if (!getCookie('modal')) {
  modalWrapper.classList.add('flex');
}

const onClose = (target) => {
  if (target.id === 'closeToday') {
    setCookie('modal', 1, 1);
  }

  modalWrapper.classList.remove('flex');
  modalWrapper.classList.add('hidden');
};

modalWrapper.onclick = (event) => {
  const target = event.target;
  const condition = target.tagName === 'BUTTON' || target.classList.contains('modal-wrapper');

  if (!condition) {
    return;
  }

  onClose(target);
};
