const keyPad = {
  1: [0, 3],
  2: [1, 3],
  3: [2, 3],
  4: [0, 2],
  5: [1, 2],
  6: [2, 2],
  7: [0, 1],
  8: [1, 1],
  9: [2, 1],
  '*': [0, 0],
  0: [1, 0],
  '#': [2, 0],
};

// 객체 접근은 keyPad[key]로 value를 불러올 수 있다.
// value가 배열일 경우 keyPad[key][index]로 값 가져오기

console.log(keyPad[5][1]); // 5번 키패드의 1번째 인덱스 = 2
console.log(keyPad[8][0]); // 8번 키패드의 0번째 인덱스 = 1
console.log(keyPad[9][2]); // 8번 키패드의 2번째 인덱스 = undefined
