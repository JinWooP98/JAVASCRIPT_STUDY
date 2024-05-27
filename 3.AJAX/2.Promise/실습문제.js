


let url = 'https://yts.mx/api/v2/list_movies.json';

const $movieList = document.querySelector('.movie-list');

// 화면에 게시물을 렌더링하는 함수
const renderMovies = movieList => {

  movieList.forEach(movie => {
    // 게시물 하나를 li태그로 만들어서 ul에 집어넣기
    // 템플릿 태그 가져오기
    const $template = document.getElementById('movie_card');
    // 템플릿 태그에서 li태그 추출
    const $div = document.importNode($template.content, true);
    $div.querySelector('.inner .title').textContent = movie.title;
    $div.querySelector('.inner .year').textContent = movie.year;
    $div.querySelector('.inner .rating').textContent = movie.rating;
    $div.querySelector('img').src=movie.large_cover_image;

    $movieList.appendChild($div);

  });
  
};

function fetchMovies(url) {
  // 서버에서 게시물 정보 받아오기
  fetch(url)
    .then(res => res.json())
    .then(json => {
      // 게시물 정보 화면에 그리기
      renderMovies(json.data.movies);
    });
  }

  fetchMovies(url);

document.querySelector("header .gnb ul").addEventListener('click', e => {

  // a태그 링크이동 기능 중지
  e.preventDefault();

  $movieList.innerHTML = "";
  if(e.target === document.getElementById('s_rate')) {
    url = 'https://yts.mx/api/v2/list_movies.json?sort_by=download_count&order_by=desc';
    fetchMovies(url)
  } else if(e.target === document.getElementById('s_year') ) {
    url = 'https://yts.mx/api/v2/list_movies.json?sort_by=year&order_by=asc';
    fetchMovies(url)
  } else if(e.target === document.getElementById('s_like')) {
    url = 'https://yts.mx/api/v2/list_movies.json?sort_by=like_count&order_by=desc';
    fetchMovies(url)
  }
})