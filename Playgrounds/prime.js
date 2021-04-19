function primeList(n) {
  // 에라토스테네스의 체 초기화: n개 요소에 true 설정(소수로 간주)
  let sieve = [];
  for (let i = 2; i < n; i++) {
    sieve.push(true);
  }

  //   console.log(sieve);
  // // n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
  let m = parseInt(n ** 0.5, 10);
  for (let i = 2; i < m + 1; i++) {
    if (sieve[i] == true) {
      // i가 소수인 경우
      for (let j = i + i; j < n; j += i) {
        // i이후 i의 배수들을 False 판정
        sieve[j] = false;
      }
    }
  }
  // 소수 목록 산출
  let answer = [];
  for (let i = 2; i < n; i++) {
    if (sieve[i] == true) {
      answer.push(i);
    }
  }
  return answer;
}
console.log(primeList(10));
