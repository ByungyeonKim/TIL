# 그때그때 마주하는 헷갈리는 단어들 모음집

### 리터럴

<!-- https://asfirstalways.tistory.com/21#footnote_21_1 -->

> "리터럴 표기법으로 값을 다루기 바랍니다."
> "함수 객체는 함수 리터럴로 생성할 수 있다."
> "리터럴은 변수 초기화에 종종 사용된다."

- 변수나 상수는 메모리에 할당된 '공간'이라면 리터럴은 이 공간에 저장되는 '값'이다.
  - 즉 리터럴이란 컴파일 시 프로그램 내에 정의 되어있는 그대로 해석되어야 할 값을 의미한다.
- 코드 상에서 **데이터를 표현하는 방식**을 뜻한다.
- 여기서 리터럴 표기법이란 **변수를 선언함과 동시에 그 값을 지정해주는 표기법**을 뜻한다.

```js
let num = 5;
let obj = { name: 'BY', age: 27 };
let onLogin = true;
```

- 리터럴 표기법은 비 정규적인 방법이 아니다.
- 성능 저하를 불러오지 않으며 코드는 더 짧기 때문에 JS 인터프리터의 해석분량도 줄어들어 오히려 더 빠르다.

### 불변객체

<!-- https://blog.coderifleman.com/2015/08/16/react-and-immutable/ -->

- OOP에 있어 불변객체(Immutable Object)는 생성 후 그 상태를 변경할 수 없는 객체를 뜻한다.

```js
let hi = new String('Hello By');
hi.replace('By', 'BY');
hi.valueOf(); // Hello By
```

- hi에서 생성한 문자열 객체는 불변 객체이므로 객체 자신이 소유하거나 관리하는 값 또는 상태를 바꿀 수 없다.
  - 따라서 replace 메서드는 새로운 상태를 가지는 또 다른 객체를 생성한다.
- 변수의 값을 바꾸기 위해서는 아래 처럼 새로운 객체를 변수에 할당해야 한다.

```js
let hi = new String('Hello By');
hi = hi.replace('By', 'BY 👋');
hi.valueOf(); // Hello BY 👋
```

### 순수 함수

```js
function sum(a, b) {
  return a + b;
}
```

- 입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환하는 함수를 뜻한다.
- 사이드 이펙트가 없는 함수를 뜻한다.
  - 사이드 이펙트란?
  - 함수 외부의 값을 참조하거나 외부 상태를 변경, 함수로 들어온 인자의 상태를 직접 변경하는 것.
    ```js
    function withdraw(account, amount) {
      account.total -= amount;
    }
    ```
