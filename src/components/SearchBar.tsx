import { Suspense } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import { useGenreList } from '../hooks/useGenreList';
import './SearchBar.css';

type GenreProps = {
  id: number;
  name: string;
};

const SearchBar = () => {
  const { genres, loading, error } = useGenreList(); //TODO: LOADING AND ERROR HANDLING OF GENRES
  return (
    <div className='searchbar'>
      <Card title='Search by title' className='searchbar__card__card_title'>
        <Input />
        <Button />
      </Card>
      <Card title='Search by genres'>
        {genres.map((genre: GenreProps) => {
          return (
            <Suspense key={genre.id} fallback={<div>Loading genres...</div>}>
              <Checkbox label={genre.name} />
            </Suspense>
          );
        })}
      </Card>
      <Card title='Search by rating'>
        <Checkbox label='label' />
      </Card>
    </div>
  );
};

export default SearchBar;
