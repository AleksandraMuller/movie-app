import { ChangeEvent } from 'react';
import './Input.css';

type InputProps = {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange }: InputProps) => {
  return (
    <div className='input'>
      <input
        className='input_field'
        type='text'
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
