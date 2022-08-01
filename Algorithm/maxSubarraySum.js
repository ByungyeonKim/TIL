function maxSubarraySum(arr, num) {
  if (arr.length === 0 || arr.length < num) {
    return null;
  }

  let sum = 0;
  let max = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];

    max = sum;
  }

  for (let i = 0; i < arr.length - num; i++) {
    sum -= arr[i];
    sum += arr[i + num];

    if (max < sum) {
      max = sum;
    }
  }

  return max;
}

console.log(maxSubarraySum([50, 0, 400], 5));
console.log(maxSubarraySum([800, 200, 300, 400], 3));
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
