import Button from '../UI/Button';
import ListItem from '../UI/ListItem';
import { useMoviesContext } from '../context/MoviesContext';
import './MovieList.css';

const movieListHeaderItems = ['Year', 'Title', 'Rating', 'Genre'];

const MovieList = () => {
  const { movies, genres, setPage, page, totalPages } = useMoviesContext();

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
  };
  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
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
      {movies.length > 0 && (
        <div className='movielist_total_pages'>
          <p>Page:</p>
          <p>
            {page}/{totalPages}
          </p>
        </div>
      )}
      {movies.map((movie) => {
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
      })}
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
