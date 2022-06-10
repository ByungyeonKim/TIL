const clickBtn = document.querySelector('#clickBtn');
const clickCnt = document.querySelector('#clickCnt');
const throttlingCnt = document.querySelector('#throttlingCnt');

let timerId;

function throttling(func, timeout = 2000) {
  if (timerId) {
    return;
  }

  timerId = setTimeout(() => {
    func();
    timerId = undefined;
  }, timeout);
}

function delayFunction() {
  throttlingCnt.innerHTML = parseInt(throttlingCnt.innerHTML) + 1;
}

clickBtn.addEventListener('click', () => {
  clickCnt.innerHTML = parseInt(clickCnt.innerHTML) + 1;
  throttling(delayFunction);
});
