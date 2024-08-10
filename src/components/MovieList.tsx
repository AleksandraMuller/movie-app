import ListItem from '../UI/ListItem';
import { useMoviesContext } from '../context/MoviesContext';
import './MovieList.css';

const MovieList = () => {
  const { movies, genres } = useMoviesContext();

  const getGenreNames = (genreIds: number[]) => {
    return genreIds
      .map((id: number) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : 'Unknown';
      })
      .join(', ');
  };

  return (
    <div className='movielist'>
      <div className='movielist_header'>
        <div className='movielist_header_image'></div>
        <p className='movielist_header_year'>Year</p>
        <p className='movielist_header_title'>Title</p>
        <p className='movielist_header_rating'>Rating</p>
        <p>Genre</p>
      </div>
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
    </div>
  );
};

export default MovieList;
