# 가운데 글자 가져오기

- 단어 s의 가운데 글자를 반환하면 되는 문제이다. 단어 길이가 짝수이면 가운데 두글자를 반환하면 된다.

## 입출력 예

| s       | return |
| ------- | ------ |
| "abcde" | "c"    |
| "qwer"  | "we"   |

## 코드

```js
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
```
