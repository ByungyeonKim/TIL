// 기존과 달라진 ES6에서의 리스트 순회
const log = console.log;
// const list = [1, 2, 3, 4, 5];
// const str = 'abc';

// for (const a of list) {
//   log(a);
// }

// for (const a of str) {
//   log(a);
// }

// Array를 통해 알아보기
log('🌱 Arr-------------');
const arr = [1, 2, 3];
for (const a of arr) {
  log(a);
}
// Set을 통해 알아보기
log('🌿 Set-------------');
const set = new Set([1, 2, 3]);
for (const a of set) {
  log(a);
}
// Map을 통해 알아보기
log('🌴 Map-------------');
const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
for (const a of map.keys()) {
  log(a);
}
for (const a of map.values()) {
  log(a);
}
for (const a of map.entries()) {
  log(a);
}
// Array, Set, Map 모두 이터레이터 프로토콜을 따른다.
let iterator = map[Symbol.iterator]();
log(iterator);
log(iterator.next());
log(iterator.next());
log(iterator.next());
log(iterator.next());
