import { useApp } from '../context/AppContext';
import './FormInput.css'

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  const {isError} = useApp();

    return (
      <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
      />
      <span>{isError ? 'Credentials dont match any account' : null}</span>
    </div>
    )
}

export default FormInput