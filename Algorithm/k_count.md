# K번째수

- 배열을 얼마나 잘 다루는지 보는 테스트이다. 다시 말해 배열의 인덱스, 순서 처리와 정렬 등을 할 수 있는지 보는 테스트인 것 같다.
- 배열 array의 i번째 숫자부터 j번째 숫자까지 자른 후 정렬했을 때, k번째에 있는 수를 구한다.

  - 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

  1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]이다.
  2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]이다.
  3. 2에서 나온 배열의 3번째 숫자는 5이다.

- 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성하자.

## 제한사항

- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.

## 입출력 예

| array                 | commands                            | return    |
| --------------------- | ----------------------------------- | --------- |
| [1, 5, 2, 6, 3, 7, 4] | [ [2, 5, 3], [4, 4, 1], [1, 7, 3] ] | [5, 6, 3] |

## 코드

```js
function solution(array, commands) {
  const answer = [];
  commands.forEach((range) => {
    const newArray = array.slice(range[0] - 1, range[1]);
    newArray.sort((a, b) => a - b);
    answer.push(newArray[range[2] - 1]);
  });
  return answer;
}
```

- forEach()로 commands배열의 요소들을 받아오고 주어진 범위에 따라 잘라준 후 정렬, 빈 배열(answer)에 push 해주었다. commands배열의 각 원소의 길이가 3으로 제한되었기 때문에 비교적 쉬웠다.

### 다른 풀이

```js
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    console.log(ePosition);
    const newArray = array
      .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
```

- 구조분해 할당을 통해 풀이를 한 것에 내공이 느껴졌다. 테스트 속도는 비슷했지만 가독성이 좋고 참신한 방법이라 첨부했다. 구조분해 할당을 통해 배열을 해체하고 그 값들을 변수에 담는다. 그후 filter() 메서드로 주어진 범위내의 배열로 걸러냈다. 좋은 자극이 되었다.
