const numberOfFilms = + prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true
};

let movieName = prompt('Один из последних просмотренных фильмов?', '');

personalMovieDB.movies[movieName] = prompt('на сколько оцение его?', '');

movieName = prompt('Один из последних просмотренных фильмов?', '');

personalMovieDB.movies[movieName] = prompt('на сколько оцение его?', '');
