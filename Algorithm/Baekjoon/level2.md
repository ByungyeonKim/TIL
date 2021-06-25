# 백준 알고리즘(Node.js)

## 두 수 비교하기

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  const input = line.split(' ');
  const a = Number(input[0]);
  const b = Number(input[1]);
  if (a > b) console.log('>');
  if (a < b) console.log('<');
  if (a === b) console.log('==');
  rl.close();
}).on('close', function () {
  process.exit();
});
```

## 시험 성적

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  const a = line;
  if (a >= 90 && a <= 100) {
    console.log('A');
  } else if (a >= 80 && a <= 89) {
    console.log('B');
  } else if (a >= 70 && a <= 79) {
    console.log('C');
  } else if (a >= 60 && a <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }
  rl.close();
}).on('close', function () {
  process.exit();
});
```

## 윤년

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

let input = [];

rl.on('line', (num) => {
  input.push(num);
  if (input.length === 2) rl.close();
}).on('close', function () {
  const x = Number(input[0]);
  const y = Number(input[1]);
  if (x > 0 && y > 0) console.log(1);
  if (x < 0 && y > 0) console.log(2);
  if (x < 0 && y < 0) console.log(3);
  if (x > 0 && y < 0) console.log(4);
  process.exit();
});
```

## 알람 시계

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (num) => {
  let input = num.split(' ');
  let h = Number(input[0]);
  let m = Number(input[1] - 45);
  if (h > 0 && m < 0) {
    console.log(h - 1, m + 60);
    rl.close();
  } else if (h === 0 && m < 0) {
    console.log(h + 23, m + 60);
    rl.close();
  }
  console.log(h, m);
  rl.close();
}).on('close', function () {
  process.exit();
});
```

이번엔 조건문을 활용한 문제를 풀어봤다. 이렇게 재밌는데 조금만 문제가 꼬이면 너무 어렵다..😭 차근차근 단계를 올리면서 프로그래머스 level2를 풀 정도의 실력이 되는 것이 목표다.
