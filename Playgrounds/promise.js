'use strict';

// 자바스크립트 내장 객체로써 비동기 연산을 할 때 사용한다.

const promise = new Promise((resolve, reject) => {
  console.log('실행중..');
  setTimeout(() => {
    resolve('실행 완료');
    reject(new Error('인터넷 연결이 끊겼습니다.'));
  }, 2000);
});

promise //
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(error);
