const array = [1, 2, 3, 4, 5];

const map1 = array.map((x) => x);
const map2 = array.map((x) => ({ x, plus: x + 1 }));
const map3 = array.map((x) => {
  if (x > 3) return x * 2;
});

function foo(b) {
  let a = 10;
  return a + b;
}

function bar(x) {
  let y = 2;
  return foo(x + y);
}

console.log(bar(1));
