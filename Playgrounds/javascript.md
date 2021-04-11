### map() 메서드

- 리액트나 자바스크립트에서 데이터를 다룰 때 자주 쓰이는 배열 메서드 중 하나
- 배열 내의 각 요소를 빙글빙글 돌면서 각 요소에 주어진 함수를 호출하여 새로운 배열을 반환한다.
- 가려운 부분을 시원하게 긁어준 궁금증을 풀었다.

  - 메서드 코드를 작성할 때 괄호들의 쓰임 3가지

    1. ```js
       map((item) => value);
       ```
    2. ```js
       map((item) => ({ value }));
       ```
    3. ```js
       map(item => {
          code...
          return value;
        });
       ```

    ```js
    const array = [1, 2, 3, 4, 5];

    const map1 = array.map((x) => x);
    const map2 = array.map((x) => ({ x, plus: x + 1 }));
    const map3 = array.map((x) => {
      if (x > 3) return x * 2;
    });
    ```

- map() 메서드는 마지막 요소까지 모두 순회를 마치고 함수 스코프를 빠져나가기 때문에 `map3`의 경우 4미만의 요소는 undefined를 반환한다.
- (5) [undefined, undefined, undefined, 8, 10]
