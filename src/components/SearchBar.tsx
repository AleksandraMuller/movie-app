import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import './SearchBar.css';
import { useMoviesContext } from '../context/MoviesContext';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
    isGenresLoading,
    genresError,
  } = useMoviesContext();

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
        {isGenresLoading ? (
          <SkeletonTheme baseColor='#202020' highlightColor='#444'>
            <Skeleton count={10} height={50} />
          </SkeletonTheme>
        ) : genresError ? (
          <div>Error loading genres: {genresError.message}</div>
        ) : (
          genres.map((genre: GenreProps) => (
            <Checkbox
              key={genre.id}
              label={genre.name}
              isSelected={selectedGenreIds?.includes(genre.id)}
              onCheckboxChange={() => onCheckboxChange(genre.id)}
            />
          ))
        )}
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
