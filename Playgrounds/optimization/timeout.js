function delayFunction() {
  console.log('300 밀리초 뒤에 호출됩니다.');
}

const timerId = setTimeout(delayFunction, 300);
console.log(`Timer ID: ${timerId}`);

clearTimeout(timerId);
