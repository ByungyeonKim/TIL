function outer() {
  let n = 0;
  function increase() {
    console.log((n += 1));
  }

  return increase;
}
// outer();
// outer();
// outer();
let newFn = outer();
newFn();
newFn();
newFn();
