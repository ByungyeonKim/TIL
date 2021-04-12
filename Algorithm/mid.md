# 가운데 글자 가져오기

- 주어진 문자열의 가운데 글자를 반환하는 문제. 짝수일 경우 가운데 두 글자를 반환해야 한다.

## 제한사항

- s는 길이가 1이상, 100이하인 스트링입니다.

## 입출력 예

| s       | return |
| ------- | ------ |
| "abcde" | "c"    |
| "qwer"  | "we"   |

## 코드

```js
function solution(s) {
  const m = Math.round(s.length / 2);
  let answer = '';
  if (s.length % 2 === 0) {
    answer = s.slice(m - 1, m + 1);
  } else {
    answer = s.slice(m - 1, m);
  }

  return answer;
}
```

- 처음엔 `substr()` 메서드를 이용해 문자를 가져오려 했지만 MDN 사이트에서 보니 권장하는 메서드가 아니고 사용처가 많이 줄어든 것 같아 사용을 하지 않았다.

## 좀 더 깔끔한 코드

```js
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
```

- 다른 분의 풀이인데 삼항 연산자를 사용하여 깔끔한 코드를 완성했다. 👍
