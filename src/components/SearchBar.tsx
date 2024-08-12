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

const ratingLabels = Array.from({ length: 11 }, (_, index) => ({
  id: index,
  value: `${index}`,
}));
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const {
    setFetchValue,
    genres,
    selectedGenreIds,
    setSelectedGenreIds,
    selectedRatingIds,
    setSelectedRatingIds,
  } = useMoviesContext();
  //TODO: LOADING AND ERROR HANDLING OF GENRES

  const onCheckboxChange = (id: number) => {
    setSelectedGenreIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((genreId) => genreId !== id)
        : [...prevIds, id]
    );
  };
  const onCheckboxRatingsChange = (id: number) => {
    setSelectedRatingIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((genreId) => genreId !== id)
        : [...prevIds, id]
    );
  };
  return (
    <div className='searchbar'>
      <Card title='Search by title' className='searchbar__card__card_title'>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button onClick={() => setFetchValue(searchValue)} label='Search' />
      </Card>
      <Card title='Search by genres'>
        {genres.map((genre: GenreProps) => {
          return (
            <Suspense key={genre.id} fallback={<div>Loading genres...</div>}>
              <Checkbox
                label={genre.name}
                isSelected={selectedGenreIds?.includes(genre.id)}
                onCheckboxChange={() => onCheckboxChange(genre.id)}
              />
            </Suspense>
          );
        })}
      </Card>
      <Card title='Search by rating'>
        {ratingLabels.map((ratingLabel) => {
          return (
            <Checkbox
              key={ratingLabel.id}
              label={ratingLabel.value}
              isSelected={selectedRatingIds?.includes(ratingLabel.id)}
              onCheckboxChange={() => onCheckboxRatingsChange(ratingLabel.id)}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default SearchBar;
