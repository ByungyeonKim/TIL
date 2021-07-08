// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   // 데이터베이스에 답을 기억하기
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// console.log();
// console.log(`  |\\_/|`);
// console.log(`  |q p| /}`);
// console.log(`  ( 0 )"""\\`);
// console.log('  |"^"` |');
// console.log(`  ||\_/=\\\\\_\_|`);
// console.log();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let star = '';
rl.on('line', (num) => {
  for (let i = 1; i <= num; i++) {
    star += '*';
    console.log(`     ${star}`);
  }
  rl.close();
}).on('close', () => {
  process.exit();
});
