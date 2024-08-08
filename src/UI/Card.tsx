import { ReactNode } from 'react';
import './Card.css';

type Props = {
  children?: ReactNode;
  title: string;
  className?: string;
};

const Card = ({ children, title, className }: Props) => {
  return (
    <div className='card'>
      <h3 className='card__card_title'>{title}</h3>
      <div className='card__card_content'>fjfhgjkfdhg</div>
      <div className='card__card_content'>jgfhjgkfhdkj</div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Card;
