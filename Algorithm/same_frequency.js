function sameFrequency(first, second) {
  let firstChar = String(first);
  let secondChar = String(second);

  if (firstChar.length !== secondChar.length) {
    return false;
  }

  let lookup = {};
  for (let char of firstChar) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (let char of secondChar) {
    if (!lookup[char]) {
      return false;
    }
    lookup[char] -= 1;
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 13));
console.log(sameFrequency(358967, 679835));
console.log(sameFrequency(192, 1212));
console.log(sameFrequency(12, 222));
console.log(sameFrequency());
