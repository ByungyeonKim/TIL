function areThereDuplicates(...args) {
  let arr = args;

  let lookup = {};

  for (let i = 0; i < arr.length; i++) {
    lookup[arr[i]] ? (lookup[arr[i]] += 1) : (lookup[arr[i]] = 1);
    if (lookup[arr[i]] === 2) {
      return true;
    }
  }

  return false;
}

// 또 다른 솔루션(빈도 수 세기)
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

// 또 다른 솔루션(다중 포인터)
// function areThereDuplicates(...args) {
// Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// 또 다른 솔루션
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates(1, 2, 3, 4, 5, 7, 2));
console.log(areThereDuplicates());
console.log(areThereDuplicates('1', 2, '3', 4, 'a', 7, 'a'));
