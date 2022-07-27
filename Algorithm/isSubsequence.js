function isSubsequence(str1, str2) {
  // 두개의 포인터 생성
  let i = 0;
  let j = 0;

  if (!str1) {
    return true;
  }

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }

    if (i === str1.length) {
      return true;
    }

    j++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
console.log(isSubsequence('', 'acb'));
