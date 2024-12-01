// script.js
const movieList = document.querySelector('.movie-list');

// Dados dos filmes (substitua por dados reais da sua API)
const movies = [
  { title: 'Filme 1', image: 'img.jpg' },
  { title: 'Filme 2', image: 'img.jpg' },
  { title: 'Filme 3', image: 'img.jpg' },
    { title: 'Filme 4', image: 'img.jpg' },
  { title: 'Filme 5', image: 'img.jpg' },
  { title: 'Filme 6', image: 'img.jpg' },
  // ... mais filmes
];

// Função para criar os cards de filme
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.classList.add('movie-card');


  const img = document.createElement('img');
  img.src = movie.image;
  img.alt = movie.title;
  card.appendChild(img);

  const title = document.createElement('h3');
  title.textContent = movie.title;
  card.appendChild(title);



  return card;
}

// Adicionar os cards à lista de filmes
movies.forEach(movie => {
  const card = createMovieCard(movie);
  movieList.appendChild(card);
});