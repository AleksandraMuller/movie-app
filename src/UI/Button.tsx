import './Button.css';

type Props = {
  onClick: () => void;
};

const Button = ({ onClick }: Props) => {
  return (
    <div className='button'>
      <button className='button_element' onClick={onClick}>
        Search --
      </button>
    </div>
  );
};

export default Button;
