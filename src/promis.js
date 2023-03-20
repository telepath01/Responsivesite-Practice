'use strict';

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log('done');
}

function countDownRecursive(n) {
  if (n <= 0) {
    console.log('done');
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}
