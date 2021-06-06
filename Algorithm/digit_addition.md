# 자릿수 더하기

## 문제 설명

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

## 제한사항

- N의 범위 : 100,000,000 이하의 자연수

## 입출력 예

| N   | answer |
| --- | ------ |
| 123 | 6      |
| 987 | 24     |

## 입출력 예 설명

- 입출력 예 #1

  - 문제의 예시와 같습니다.

- 입출력 예 #2
  - 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

## 코드

```js
function solution1(n) {
  let answer = 0;
  const str = String(n);

  for (let i = 0; i < str.length; i++) {
    const num = Number(str[i]);
    answer += num;
  }

  return answer;
}

function solution2(n) {
  let answer = 0;
  const str = n + '';

  for (let i = 0; i < str.length; i++) {
    const num = parseInt(str[i], 10);
    answer += num;
  }

  return answer;
}
```

- parseInt() 메서드는 문자열 인자를 파싱하여 특정 진수의 정수를 반환한다. 두 번째 인자 같은 경우 보통 생략을 하지만 ES5 이전에는 문자열이 0으로 시작할 경우 8진수로 해석한다.
  - 모든 브라우저가 환경이 같지 않기 때문에 혼동을 줄이기 위해 두번째 인자를 명시할 것을 권장한다.
- 하지만 주어지는 매개변수(데이터)의 조건에 따라 생략이 가능할 수도 있겠다.
