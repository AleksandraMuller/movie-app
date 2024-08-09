import ListItem from '../UI/ListItem';
import './MovieList.css';

const MovieList = () => {
  return (
    <div className='movielist'>
      <div className='movielist_header'>
        <p>Year</p>
        <p>Title</p>
        <p>Rating</p>
        <p>Genre</p>
      </div>
      <ListItem />
    </div>
  );
};

export default MovieList;
