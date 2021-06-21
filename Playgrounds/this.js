// 'use strict';

let age = 100;

function foo() {
  let age = 99;
  bar();
}

function bar() {
  console.log(age);
}

foo();
