const arr1 = [1, 2, 3, 3, 3, 3, 4, 4];
const arr2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
const arr3 = [3, 5, 7, 9, 1];

function solution(arr) {
  const map = arr.reduce((prev, curr) => {
    prev.set(curr, (prev.get(curr) || 0) + 1);
    return prev;
  }, new Map());

  result = [];
  for (let [key, val] of map) {
    if (val > 1) result.push(val);
  }
  if (result.length === 0) {
    return [-1];
  }
  return result;
}

console.log(solution(arr3));
