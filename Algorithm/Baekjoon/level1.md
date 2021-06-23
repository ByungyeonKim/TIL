# 백준 알고리즘(Node.js)

## We love kriii

```js
console.log('강한친구 대한육군');
console.log('강한친구 대한육군');
```

## 고양이

```js
console.log(`\\ /\\`);
console.log(` ) ( ')`);
console.log(`( / )`);
console.log(` \\(__)|`);
```

## 개

```js
console.log(`|\\_/|`);
console.log(`|q p| /}`);
console.log(`( 0 )"""\\`);
console.log('|"^"` |');
console.log(`||\_/=\\\\\_\_|`);
```

## 사칙연산

```js
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
});

rl.on('line', function (line) {
const input = line.split(' ');
const division = Number(input[0]) / Number(input[1]);

console.log(Number(input[0]) + Number(input[1]));
console.log(Number(input[0]) - Number(input[1]));
console.log(Number(input[0]) \* Number(input[1]));
console.log(Math.floor(division));
console.log(Number(input[0]) % Number(input[1]));

rl.close();
}).on('close', function () {
process.exit();
});
```

## 나머지

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', function (line) {
  const input = line.split(' ');
  const a = Number(input[0]);
  const b = Number(input[1]);
  const c = Number(input[2]);

  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log(((a % c) * (b % c)) % c);

  rl.close();
}).on('close', function () {
  process.exit();
});
```

## 곱셈

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const input = [];

rl.on('line', function (line) {
  if (input.length === 2) rl.close();
  input.push(line);
}).on('close', function () {
  const a = Number(input[1][2]);
  const b = Number(input[1][1]);
  const c = Number(input[1][0]);

  console.log(Number(input[0] * a));
  console.log(Number(input[0] * b));
  console.log(Number(input[0] * c));
  console.log(Number(input[0]) * Number(input[1]));
  process.exit();
});
```

백준에는 자바스크립트로 알고리즘을 풀려면 Node.js 환경에서 풀어야한다.
따라서 조금은 불편하기도 하다. 처음에는 조금 헤맸는데 입력값 받아오는 것을 배우고 나서 약간 적응했다.
