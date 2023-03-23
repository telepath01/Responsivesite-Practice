'use strict';

function fibs(number) {
  let n1 = 0;
  let n2 = 1;
  for (let i = number; i >= 0; i--) {
    n1 = n1 + n2;
    n2 = n1;
  }
  return n1;
}
