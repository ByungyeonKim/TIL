# 문자열 다루기 기본

- 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

## 제한 사항

- s는 길이 1 이상, 길이 8 이하인 문자열입니다.

## 입출력 예

| s      | return |
| ------ | ------ |
| "a234" | false  |
| "1234" | true   |

## 코드

```js
function solution(s) {
  if (s.length === 4 || s.length == 6) {
    return s.match(/\D/gi) ? false : true;
  }
  return false;
}
```

- 정규 표현식을 쓰다보니까 이제 검색이나 문자열 다룰 때 정규 표현식부터 생각이 난다. 한 번 배워두니 요긴하게 사용하고 있다.
