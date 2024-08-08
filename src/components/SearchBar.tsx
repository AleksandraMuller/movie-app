import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <Card title='Search by title' className='searchbar__card__card_title'>
        <Input />
        <Button />
      </Card>
      <Card title='Search by genres' />
      <Card title='Search by rating' />
    </div>
  );
};

export default SearchBar;
