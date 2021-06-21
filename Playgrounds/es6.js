// Module
// 앱을 구성하는 '개별적 요소'로써 재사용 가능한 코드 조각
// 세부 사항을 캡슐화하고 공개가 필요한 API만을 외부에 노출

// module.js의 API를 노출/불러오기
// 모듈을 사용할 땐 HTML 스크립트에 type="module" 속성을 넣어준다.
import { greeting, sum } from './module.js';

console.log(sum(1, 6));
console.log(greeting);

// Class
// 같은 종류의 집단에 속하는 속성(attribute)과 행위(behavior)를 정의한 것
// 객체지향 프로그램의 기본적인 사용자 정의 데이터타입이라고 할 수 있다.
// new 연산자를 통한 인스턴스화 과정이 필요.

// 클래스 선언
class Person {
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello! I'm ${this.name}.`);
  }
}

// 인스턴스 생성
const me = new Person('Kim');
me.sayHello(); // Hello! I'm Kim.

console.log(me instanceof Person); // true

// 클래스도 let, const 키워드와 같은 방식으로 호이스팅이 된다.
{
  // Uncaught ReferenceError: Cannot access 'Foo' before initialization
  console.log(Foo);

  class Foo {}
}

const Foo = '';

{
  // 호이스팅이 발생하지 않는다면 ''가 출력되어야 한다.
  console.log(Foo);
  // Uncaught ReferenceError: Cannot access 'Foo' before initialization
  class Foo {}
}

// let, const
// var와 달리 블록스코프 지원, 재선언, 재할당 불가 등의 차이가 있다.
// let과 const와의 가장 큰 차이는 let은 재할당이 가능하지만 const는 상수 변수로써 재할당이 불가.

// 기본값 매개변수(default parameter)
// 값이 없거나 undefined가 전달될 경우 정해준 기본값으로 전달이 가능해졌다.

// 기존에 사용하던(ES6 전) 방식
function multiply(a, b) {
  if (b === undefined) b = 1;
  return a * b;
}

console.log(multiply(5)); // 5
console.log(multiply(5, 5)); // 25

// ES6 방식
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
console.log(multiply(5, 5)); // 25

// Promise
// 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
// 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용한다.
// 데이터와 관련된 렌더링을 할 때, 데이터를 받아온 후 렌더링하기 위해 사용.
// 프로미스엔 상태(states)가 존재하며 3가지의 상태를 갖는다.
// 1. Pending(대기) : 비동기 처리 로직이 아직 완료되지 않음
// 2. Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해줌
// 3. Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생함
const getData = () => {
  return new Promise((resolve, reject) => {
    const data = 100;
    resolve(data);
    reject(new Error('Request is failed.'));
  });
};

getData().then((data) => {
  console.log(data);
});
