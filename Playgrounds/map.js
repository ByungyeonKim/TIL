// const map = new Map();

// map.set('1', 'string key');
// map.set(1, 'number key');
// map.set(true, 'boolean key');

// 객체의 키는 반드시 String or Symbol이어야 한다.
// 맵은 키의 타입을 그대로 유지한다.

// console.log(map.get(1));
// console.log(map.get('1'));
// console.log(map.get(true));

// const iterable = new Map([
//   [1, 5],
//   [2, 3],
//   [3, 1],
//   [6, 1],
//   [8, 2],
// ]);

// console.log(iterable);
// console.log(iterable.get(8));
// const res = [];
// for (let [key, val] of iterable) {
//   if (val > 1) {
//     res.push(val);
//   }
// }
// console.log(res);

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
const k = 2;

/**
 * 결과가 [2, 1, 1, 0]이 나와야함
 * */
function solution(id_list, report, k) {
  const userList = id_list.reduce((result, currentId) => {
    result[currentId] = [0, []];
    return result;
  }, {});

  for (const id of new Set(report)) {
    const [REPORT_ID, ID] = id.split(' ');
    userList[REPORT_ID][1].push(ID);
    userList[ID][0]++;
  }

  const banned = id_list.filter((id) => userList[id][0] >= k);
  const email = id_list.map((id) => {
    return userList[id][1].filter((id) => {
      return banned.includes(id);
    }).length;
  });

  return email;
}

console.log(solution(id_list, report, k));
