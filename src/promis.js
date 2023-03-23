'use strict';

function fibs(number) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

function fibsRec(number) {
  if (number < 2) {
    return number;
  } else {
    return fibsRec(number - 1) + fibsRec(number - 2);
  }
}
