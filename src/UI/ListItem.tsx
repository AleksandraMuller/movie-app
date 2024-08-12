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
  const size = 'w200';
  const imageUrl = image
    ? `${baseUrl}${size}${image}`
    : '/image-not-found.webp';
  return (
    <div className='listitem'>
      <img
        src={imageUrl}
        alt='with sign of react'
        className='listitem_item_image'
      ></img>
      <p className='listitem_item'>
        {year ? new Date(year).getFullYear() : '-'}
      </p>
      <p className='listitem_item'>{title ? title : '-'}</p>
      <p className='listitem_item'>
        {rating ? Number(rating.toFixed(1)) : '-'}
      </p>
      <p className='listitem_item'>{genres ? genres : '-'}</p>
    </div>
  );
};

export default ListItem;
