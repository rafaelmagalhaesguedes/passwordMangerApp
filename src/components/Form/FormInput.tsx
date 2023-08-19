import { ReactElement, ChangeEvent } from 'react';

type FormInputProps = {
  label: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

function FormInput({
  label,
  type,
  value,
  onChange,
  placeholder = '',
  required = false,
}: FormInputProps): ReactElement {
  return (
    <div className="form-input">
      <label htmlFor={ `input${label}` }>{label}</label>
      <input
        type={ type }
        id={ `input${label}` }
        className={ `input${label}` }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
        required={ required }
      />
    </div>
  );
}

export default FormInput;
