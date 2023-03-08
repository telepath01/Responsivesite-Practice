'use strict';
new Promise((resolve, reject) => {
  reject('Nope');
})
  .then(() => {
    console.log('success');
  })
  .catch(() => {
    console.log('fail');
  })
  .finally((res) => {
    console.log('finally');
  });
