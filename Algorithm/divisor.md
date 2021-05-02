# 나누어 떨어지는 숫자 배열

- 정렬되지 않은 배열인 arr의 요소 중 divisor로 나누어 떨어지는 값을 배열에 담아 반환한다. 그 후 오름차순으로 정렬하면 되는 문제이다. 만약 떨어지는 값이 없다면 배열에 -1을 넣어 반환한다.

## 제한사항

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

## 입출력 예

| arr           | divisor | return        |
| ------------- | ------- | ------------- |
| [5, 9, 7, 10] | 5       | [5, 10]       |
| [2, 36, 1, 3] | 1       | [1, 2, 3, 36] |
| [3, 2, 6]     | 10      | [-1]          |

## 코드

```js
function solution(arr, divisor) {
  const answer = arr.filter((num) => num % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
```

- `filter()` 메서드를 이용해 쉽게 해결 할 수 있었다. 점점 푸는 속도가 빨라지고 혼자서 해결하는 부분이 많아지고 있다. 뿌듯하다🔥