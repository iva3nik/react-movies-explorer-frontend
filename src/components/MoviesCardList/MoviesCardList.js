import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import { Route, useLocation } from 'react-router-dom';

function MoviesCardList({
  onMovieLike,
  onMovieDeleteLike,
  savedMovies,
  initialMovies = [],
}) {
  const { pathname } = useLocation();
  const [countMovies, setCountMovies] = React.useState(0);

  React.useEffect(() => {
    pathname === '/movies' ? handleAmountCards() : setCountMovies(initialMovies.length);
  }, [initialMovies, pathname]);

  function handleAmountCards() {
    if (window.innerWidth > 1279) {
      setCountMovies(12);
    } else if (window.innerWidth > 767) {
      setCountMovies(8);
    } else {
      setCountMovies(5);
    }
  }

  function addMoreMovies() {
    if (window.innerWidth > 1279) {
      setCountMovies(countMovies + 3);
    } else {
      setCountMovies(countMovies + 2)
    }
  };

  return (
    <div className='movies-card-list'>
      <div className='movies-card-list__container'>
        {initialMovies.slice(0, countMovies).map(movie => {
          return (
            <MovieCard
              onMovieLike={onMovieLike}
              onMovieDeleteLike={onMovieDeleteLike}
              savedMovies={savedMovies}
              movie={movie}
              key={movie.id}
              country={movie.country || 'Неизвестно'}
              director={movie.director}
              duration={movie.duration}
              year={movie.year}
              description={movie.description}
              image={`https://api.nomoreparties.co${movie.image.url}`}
              trailer={movie.trailerLink || movie.trailer}
              nameRU={movie.nameRU || movie.nameEN}
              nameEN={movie.nameEN || movie.nameRU}
              thumbnail={
                movie.thumbnail ||
                  `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
              }
              movieId={`${movie.id}`}
            />
          )
        })}
      </div>
      <Route path='/movies'>
        <button
          className={
            countMovies >= initialMovies.length
              ? 'movies-card-list__button movies-card-list__button_disabled'
              : 'movies-card-list__button'
          }
          aria-label='ещё'
          onClick={addMoreMovies}
          disabled={countMovies >= initialMovies.length}
        >
          Ещё
        </button>
      </Route>
    </div>
  );
}

export default MoviesCardList;