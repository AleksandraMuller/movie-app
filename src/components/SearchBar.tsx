import { Suspense, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import './SearchBar.css';
import { useMoviesContext } from '../context/MoviesContext';

type GenreProps = {
  id: number;
  name: string;
};

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { setFetchValue, genres } = useMoviesContext();
  //TODO: LOADING AND ERROR HANDLING OF GENRES

  return (
    <div className='searchbar'>
      <Card title='Search by title' className='searchbar__card__card_title'>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button onClick={() => setFetchValue(searchValue)} />
      </Card>
      <Card title='Search by genres'>
        {genres.map((genre: GenreProps) => {
          return (
            <Suspense key={genre.id} fallback={<div>Loading genres...</div>}>
              <Checkbox label={genre.name} isSelected={false} />
            </Suspense>
          );
        })}
      </Card>
      <Card title='Search by rating'>
        <Checkbox label='label' isSelected={false} />
      </Card>
    </div>
  );
};

export default SearchBar;
