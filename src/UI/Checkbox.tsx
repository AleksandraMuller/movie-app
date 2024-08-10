import './Checkbox.css';

type Props = {
  label: string;
  isSelected: boolean;
  onCheckboxChange?: () => void;
};

const Checkbox = ({ label, isSelected, onCheckboxChange }: Props) => {
  return (
    <div className='checkbox'>
      <input
        type='checkbox'
        id={'placeholder'}
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
      ></input>
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
export default Checkbox;
