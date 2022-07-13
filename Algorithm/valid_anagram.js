function validAnagram(first, second) {
  // 서로 다른 문자열의 문자를 비교하는 함수
  // 순서는 상관이 없다. 빈도수 체크 문제
  // 대문자, 공백도 있는지?, 문자열의 길이가 다르다면?

  // 문자열의 길이가 다르면 false 반환
  if (first.length !== second.length) {
    return false;
  }

  // 빈도수를 조회할 lookup 객체 생성
  let lookup = {};

  for (let char of first) {
    // 문자가 존재하면 +1, 존재하지 않으면 1
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (let char of second) {
    // 문자를 찾지 못하면 false
    if (!lookup[char]) {
      return false;
    }
    // 문자 빈도수가 0이 되면 falsy한 값이 되어 위 조건문이 true가 된다.(따라서 false 반환)
    lookup[char] -= 1;
  }
  return true;
}

// O(n)
console.log(validAnagram('sdsazdz', 'dsasdzs'));
console.log(validAnagram('abcd', 'adbc'));
console.log(validAnagram('', ''));
console.log(validAnagram('cat', 'rat'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('cinema', 'iceman'));
