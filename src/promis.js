'use strict';
const img = document.querySelector('img');
fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=7mAve8bXCNMOeUNM0853doI6b6ZXPk6R&s=cats',
  { mode: 'cors' }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
