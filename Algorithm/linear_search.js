function linearSearch(arr, num) {
  if (arr.length === 0) {
    return console.log(-1);
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === num) {
      return console.log(i);
    }
  }

  return console.log(-1);
}

linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
linearSearch([100], 100); // 0
linearSearch([1, 2, 3, 4, 5], 6); // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
linearSearch([100], 200); // -1
