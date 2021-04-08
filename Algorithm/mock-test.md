# 모의고사 1등은 누구?

- 수포자 삼인방이 모의고사를 본다. 이 삼인방은 수학 문제를 일정한 패턴을 가지고 전부 찍으려 한다. 그 패턴은 다음과 같다.
  - 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  - 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  - 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
- 1번 문제부터 마지막 문제까지 정답이 순서대로 들어있는 배열 answers가 주어지고 가장 많은 문제를 맞힌 사람을 구하는 완전탐색 알고리즘 문제이다.
- 제한 조건은 다음과 같다.
  - 시험은 최대 10,000 문제로 구성되어있습니다.
  - 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
  - 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

## 입출력 예

| answers     | return  |
| ----------- | ------- |
| [1,2,3,4,5] | [1]     |
| [1,3,2,4,2] | [1,2,3] |

## 코드

```js
function solution(answers) {
  const answer = [];

  // 수포자들의 찍기 패턴
  let pattern1 = [1, 2, 3, 4, 5];
  let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  // 패턴의 수 만큼 반복 검사, 일치하는 수만큼의 길이(정답의 수) 리턴
  let giveUpMath1 = answers.filter((el, i) => el === pattern1[i % 5]).length;
  let giveUpMath2 = answers.filter((el, i) => el === pattern2[i % 8]).length;
  let giveUpMath3 = answers.filter((el, i) => el === pattern3[i % 10]).length;
  // 세 개의 패턴 중 최고 점수 구하기
  let high = Math.max(giveUpMath1, giveUpMath2, giveUpMath3);
  // 베스트 패턴 선별
  if (giveUpMath1 === high) answer.push(1);
  if (giveUpMath2 === high) answer.push(2);
  if (giveUpMath3 === high) answer.push(3);

  return answer;
}
```
