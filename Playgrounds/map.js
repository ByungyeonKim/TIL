const map = new Map();

map.set('1', 'string key');
map.set(1, 'number key');
map.set(true, 'boolean key');

// 객체의 키는 반드시 String or Symbol이어야 한다.
// 맵은 키의 타입을 그대로 유지한다.

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true));

const iterable = new Map([
  [1, 5],
  [2, 3],
  [3, 1],
  [6, 1],
  [8, 2],
]);

console.log(iterable);
console.log(iterable.get(8));
const res = [];
for (let [key, val] of iterable) {
  if (val > 1) {
    res.push(val);
  }
}
console.log(res);
