import './Button.css';

type Props = {
  onClick: () => void;
  label: string;
};

const Button = ({ onClick, label }: Props) => {
  return (
    <div className='button'>
      <button className='button_element' onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
