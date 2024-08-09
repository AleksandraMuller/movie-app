import './Checkbox.css';

type Props = {
  label: string;
};

const Checkbox = ({ label }: Props) => {
  return (
    <div className='checkbox'>
      <input type='checkbox' id={'placeholder'} name={'placeholder'}></input>
      <label htmlFor={'placeholder'}>{label}</label>
    </div>
  );
};
export default Checkbox;
