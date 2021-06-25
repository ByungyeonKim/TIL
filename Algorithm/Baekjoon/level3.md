# 백준 알고리즘(Node.js)

## 구구단

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (num) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
  rl.close();
}).on('close', () => {
  process.exit();
});
```

## A+B -3

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const input = [];

rl.on('line', (num) => {
  input.push(num);
  if (input.length === Number(input[0]) + 1) rl.close();
}).on('close', () => {
  const cnt = Number(input[0]);
  const nums = [];

  for (let i = 1; i <= cnt; i++) {
    nums.push(input[i].split(' '));
  }
  for (let i = 0; i < cnt; i++) {
    const a = Number(nums[i][0]);
    const b = Number(nums[i][1]);
    console.log(a + b);
  }

  process.exit();
});
```

## 합

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (num) => {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = i + sum;
  }
  console.log(sum);

  rl.close();
}).on('close', () => {
  process.exit();
});
```

## 빠른 A+B

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
rl.on('line', (num) => {
  const input = num.split(' ');

  if (input.length === 2) {
    const a = Number(input[0]);
    const b = Number(input[1]);
    answer += a + b + '\n';
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

## N 찍기

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
rl.on('line', (num) => {
  for (let i = 1; i <= num; i++) {
    answer += i + '\n';
  }
  rl.close();
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

## 기찍 N

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
rl.on('line', (num) => {
  for (let i = num; i >= 1; i--) {
    answer += i + '\n';
  }
  rl.close();
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

## A+B - 7

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
let cnt = 1;
rl.on('line', (num) => {
  const input = num.split(' ');

  if (input.length === 2) {
    const a = Number(input[0]);
    const b = Number(input[1]);
    answer += `Case #${cnt}: ${a + b}\n`;
    cnt += 1;
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

## A+B - 8

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
let cnt = 1;
rl.on('line', (num) => {
  const input = num.split(' ');

  if (input.length === 2) {
    const a = Number(input[0]);
    const b = Number(input[1]);
    answer += `Case #${cnt}: ${a} + ${b} = ${a + b}\n`;
    cnt += 1;
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

## 별 찍기 -1

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let star = '';
rl.on('line', (num) => {
  for (let i = 1; i <= num; i++) {
    star += '*';
    console.log(star);
  }
  rl.close();
}).on('close', () => {
  process.exit();
});
```

## 별 찍기 -2

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let star = '';
rl.on('line', (num) => {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      star += ' ';
    }
    for (let k = 0; k <= i; k++) {
      star += '*';
    }
    star += '\n';
  }
  rl.close();
}).on('close', () => {
  console.log(star);
  process.exit();
});
```

## X보다 작은 수

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
let nums = [];
rl.on('line', (num) => {
  nums.push(num.split(' '));
}).on('close', () => {
  const n = Number(nums[0][0]);
  const x = Number(nums[0][1]);
  for (let i = 0; i < n; i++) {
    if (Number(nums[1][i]) < x) answer += `${nums[1][i]} `;
  }
  console.log(nums);
  console.log(answer);
  process.exit();
});
```
