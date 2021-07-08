# 백준 단계별로 풀어보기 4단계 while문

---

## 01. A + B - 5

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
let i = 0;
const arr = [];
rl.on('line', (num) => {
  const input = num.split(' ');
  arr.push(input);
  while (i < arr.length) {
    const a = Number(input[0]);
    const b = Number(input[1]);
    if (a + b === 0) break;
    answer += `${a + b}\n`;
    i++;
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

## 02. A + B - 4

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
let i = 0;
const arr = [];
rl.on('line', (num) => {
  const input = num.split(' ');
  arr.push(input);
  while (i < arr.length) {
    const a = Number(input[0]);
    const b = Number(input[1]);
    answer += `${a + b}\n`;
    i++;
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

## 03. 더하기 사이클

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 0;
rl.on('line', (num) => {
  const firstNum = Number(num);

  while (true) {
    const oneDigit = num % 10;
    const tenDigits = Math.floor(num / 10);
    const convertTenDigits = (num % 10) * 10;

    i++;

    sum = tenDigits + oneDigit;
    num = convertTenDigits + (sum % 10);

    if (firstNum === num) break;
  }
}).on('close', () => {
  console.log(i);
  process.exit();
});
```
