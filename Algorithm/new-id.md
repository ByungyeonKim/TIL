# 신규아이디 추천 알고리즘

- 문제를 보고 바로 정규표현식이 생각이 났다. [드림코딩 정규표현식👏](https://youtu.be/t3M6toIflyQ) 처음엔 '이게 뭐지?' 싶은데 하다보면 쉽고 재미있다. [정규 표현식 연습 사이트👍](https://regexr.com/5ml92)
- new_id가 주어지면 규칙에 맞는지 검사하고 규칙에 맞지 않으면 새로운 아이디를 추천해주는 알고리즘이다.
- id의 규칙은 다음과 같다.
  - 아이디의 길이는 3자 이상 15자 이하여야 합니다.
  - 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(\_), 마침표(.) 문자만 사용할 수 있습니다.
  - 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
- 새로운 아이디를 추천해줄 경우
  1. new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  2. new*id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(*), 마침표(.)를 제외한 모든 문자를 제거합니다.
  3. new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  4. new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  5. new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  6. new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다. 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  7. new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

## 입출력 예

| no  | new_id                         | result            |
| --- | ------------------------------ | ----------------- |
| 예1 | "...!@BaT#\*..y.abcdefghijklm" | "bat.y.abcdefghi" |
| 예2 | "z-+.^."                       | "z--"             |
| 예3 | "=.="                          | "aaa"             |
| 예4 | "123\_.def"                    | "123\_.def"       |
| 예5 | "abcdefghijklmn.p"             | "abcdefghijklmn"  |

## 코드

```js
function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .slice(0, 15)
    .replace(/\.$/g, '');

  const len = new_id.length;

  return len > 2 ? new_id : new_id.padEnd(3, new_id[len - 1]);
}
```

## 새로 알게된 js 메소드

- `replace()` 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환한다. 왠지 정규표현식이랑 자주 볼 것 같은 메서드이다.

```js
const p = 'Hello, World';

console.log(p.replace('World', 'GitHub'));
// "Hello, GitHub"

console.log(p.replace(/Hello/g, 'Bye'));
// "Bye, World"
```

- `padEnd()` 메서드는 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환한다. 문자열의 끝부터 채워진다. 이 메서드는 정말 신기하고 편리했다.
  첫번째 인자에 목표 길이를, 두번째 인자에 현재 문자열에 채워넣을 다른 문자열을 넣으면 된다.

```js
const str = 'Hello, World';

console.log(str.length);
// 12(띄어쓰기도 포함!)
console.log(str.padEnd(13, '⭐️'));
// "Hello, World⭐"
```
