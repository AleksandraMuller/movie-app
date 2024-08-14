import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Button from '../UI/Button';
import ListItem from '../UI/ListItem';
import { useMoviesContext } from '../context/MoviesContext';
import './MovieList.css';
import { scrollToTop } from '../utils';

const movieListHeaderItems = ['Year', 'Title', 'Rating', 'Genre'];

const MovieList = () => {
  const {
    movies,
    genres,
    setPage,
    page,
    totalPages,
    totalResults,
    loading,
    error,
  } = useMoviesContext();

  const getGenreNames = (genreIds: number[]) => {
    return genreIds
      .map((id: number) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : 'Unknown';
      })
      .join(', ');
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    scrollToTop();
  };
  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
    scrollToTop();
  };

  return (
    <div className='movielist'>
      <div className='movielist_header'>
        <div className='movielist_header_image'></div>
        {movieListHeaderItems.map((item) => {
          return (
            <p key={item} className='movielist_header_item'>
              {item}
            </p>
          );
        })}
      </div>
      {movies.length === 0 && !loading && !error && (
        <div className='movielist_empty'>
          <h3>Nothing to see here yet.</h3>
          <p>Search for movies by title, genre or rating.</p>
        </div>
      )}
      {page && totalPages && totalResults !== 0 ? (
        <div className='movielist_total_pages'>
          <p>Page:</p>
          <p>{`${page} / ${totalPages}`}</p>
        </div>
      ) : null}
      {loading ? (
        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
          <p>
            <Skeleton count={10} height={150} />
          </p>
        </SkeletonTheme>
      ) : error ? (
        <div className='movielist_error'>
          Error loading movies: {error.message}
        </div>
      ) : (
        movies.map((movie) => {
          return (
            <ListItem
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date}
              genres={getGenreNames(movie?.genre_ids)}
            />
          );
        })
      )}
      <div className='movielist_button_group'>
        {page > 1 && (
          <Button onClick={handlePreviousPage} label='Previous'></Button>
        )}
        {page !== totalPages && (
          <Button onClick={handleNextPage} label='Next'></Button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
