import { Suspense, useState } from 'react';
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
  const [searchValue, setSearchValue] = useState<string>('');
  const { genres } = useGenreList(); //TODO: LOADING AND ERROR HANDLING OF GENRES

  console.log('SEARCH VALUE', searchValue);
  return (
    <div className='searchbar'>
      <Card title='Search by title' className='searchbar__card__card_title'>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
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
