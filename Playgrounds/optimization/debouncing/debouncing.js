const clickBtn = document.querySelector('#clickBtn');
const clickCnt = document.querySelector('#clickCnt');
const debouncingCnt = document.querySelector('#debouncingCnt');

let timerId;

function debouncing(func, timeout = 300) {
  clearTimeout(timerId);
  timerId = setTimeout(func, timeout);
}

function delayFunction() {
  debouncingCnt.innerHTML = parseInt(debouncingCnt.innerHTML) + 1;
  console.log('300 밀리초 뒤에 호출됩니다.');
}

clickBtn.addEventListener('click', () => {
  clickCnt.innerHTML = parseInt(clickCnt.innerHTML) + 1;
  debouncing(delayFunction);
});
