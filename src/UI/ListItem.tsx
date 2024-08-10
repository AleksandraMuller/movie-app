import './ListItem.css';

type Props = {
  title: string;
  image: string;
  rating: number;
  year: string;
  genres?: string;
};

const ListItem = ({ title, image, rating, year, genres }: Props) => {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  const size = 'w300';
  const imageUrl = `${baseUrl}${size}${image}`;
  return (
    <div className='listitem'>
      <img src={imageUrl} alt='with sign of react'></img>
      <p className='listitem_year'>{year ? year : '-'}</p>
      <p className='listitem_title'>{title ? title : '-'}</p>
      <p className='listitem_rating'>{rating ? Math.floor(rating) : '-'}</p>
      <p>{genres ? genres : '-'}</p>
    </div>
  );
};

export default ListItem;
