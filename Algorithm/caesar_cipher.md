## 카이사르 암호(Caesar cipher) 또는 시저 암호

- 암호학에서 다루는 간단한 치환암호 중 하나.
- 각각의 알파벳을 일정한 거리만큼 밀어 글자를 치환하는 방식

### 문제 설명

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### 제한 조건

- 공백은 아무리 밀어도 공백입니다.
  -s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

### 입출력 예

| s       | n   | result  |
| ------- | --- | ------- |
| "AB"    | 1   | "BC"    |
| "z"     | 1   | "a"     |
| "a B z" | 4   | "e F d" |

### 코드

```js
function solution(s, n) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    // 문자가 아닌 공백일 경우 덧셈 할당
    if (str == ' ') {
      answer += ' ';
      continue;
    }

    // 대문자 문자열에 해당하는 문자가 있을 시 upper, 없다면 lower 할당
    const upperOrLower = upper.includes(str) ? upper : lower;
    // 할당한 문자열에 매개변수 s에 해당하는 인덱스와 n 더하기
    let index = upperOrLower.indexOf(str) + n;
    // 만약 더한 인덱스가 할당한 문자열의 길이보다 길거나 같을 경우 인덱스 - 문자열 길이 빼기
    if (index >= upperOrLower.length) {
      index -= upperOrLower.length;
    }
    // 계산한 인덱스에 해당하는 문자 덧셈 할당
    answer += upperOrLower[index];
  }

  return answer;
}
```

자바스크립트 내장 객체를 이용해서 풀 수도 있지만 알고리즘 구현이 복잡하지 않고 직접 문자열을 만들어서 사용하니 가독성도 더 좋은 것 같다.
