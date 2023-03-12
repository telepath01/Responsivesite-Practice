'use strict';
const img = document.querySelector('img');

async function getCats() {
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=7mAve8bXCNMOeUNM0853doI6b6ZXPk6R&s=cats',
    { mode: 'cors' }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
getCats();
