import Swal from 'sweetalert2';
import { ReactElement, useState, ChangeEvent, useEffect } from 'react';
import { ServiceData } from '../types/types';
import FormInput from './Form/FormInput';
import PasswordToggleBtn from './Form/PassToggleBtn';
import PasswordCheck from './Form/PasswordCheck';
import Button from './Button/Button';

// Props
type FormProps = {
  onRegister: (newService: ServiceData) => void;
  onClick: () => void;
};

// Form
function Form({ onRegister, onClick }: FormProps): ReactElement {
  const [showForm, setShowForm] = useState(true);
  const [services, setServices] = useState<any[]>([]);
  const [formData, setFormData] = useState<ServiceData>({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });

  // Password States Validation
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isLengthWithinRange, setIsLengthWithinRange] = useState(false);
  const [hasLettersAndNumbers, setHasLettersAndNumbers] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

  // Button Cadastrar State
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Button Show Password
  const [passwordType, setPasswordType] = useState<string>('password');

  // Button Show Password State
  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  // Get Values
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Button Cadastrar
  const handleRegister = () => {
    const newService = {
      serviceName: formData.serviceName,
      login: formData.login,
      password: formData.password,
      url: formData.url,
    };

    onRegister(newService);
    setServices([...services, newService]);
    setFormData({ serviceName: '', login: '', password: '', url: '' });
    setShowForm(false);

    // Show SweetAlert2 alert
    Swal.fire({
      text: 'Serviço cadastrado com sucesso',
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
    });
  };

  // Update States
  useEffect(() => {
    setIsLengthValid(formData.password.length >= 8);
    setIsLengthWithinRange(formData.password.length <= 16);
    setHasLettersAndNumbers(/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(formData.password));
    setHasSpecialCharacter(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(formData.password));

    const isServiceNameValid = formData.serviceName.trim() !== '';
    const isLoginValid = formData.login.trim() !== '';

    setButtonDisabled(!(
      isServiceNameValid
      && isLoginValid
      && isLengthValid
      && isLengthWithinRange
      && hasLettersAndNumbers
      && hasSpecialCharacter
    ));
  }, [
    formData,
    isLengthValid,
    isLengthWithinRange,
    hasLettersAndNumbers,
    hasSpecialCharacter,
  ]);

  return (
    <div className="form-wrapper">
      {showForm ? (
        <form>
          <FormInput
            label="Nome do serviço"
            name="serviceName"
            type="text"
            value={ formData.serviceName }
            onChange={ handleChange }
          />

          <FormInput
            label="Login"
            name="login"
            type="text"
            value={ formData.login }
            onChange={ handleChange }
            placeholder="Login"
            required
          />

          <FormInput
            label="Senha"
            name="password"
            type={ passwordType }
            value={ formData.password }
            onChange={ handleChange }
            required
          />

          <PasswordToggleBtn
            passwordType={ passwordType }
            onClick={ togglePasswordVisibility }
          />

          <FormInput
            label="URL"
            name="url"
            type="text"
            value={ formData.url }
            onChange={ handleChange }
            required
          />

          <PasswordCheck
            valid={ isLengthValid }
            text="Possuir 8 ou mais caracteres"
          />
          <PasswordCheck
            valid={ isLengthWithinRange }
            text="Possuir até 16 caracteres"
          />
          <PasswordCheck
            valid={ hasLettersAndNumbers }
            text="Possuir letras e números"
          />
          <PasswordCheck
            valid={ hasSpecialCharacter }
            text="Possuir algum caractere especial"
          />

          <Button
            onClick={ () => handleRegister() }
            disabled={ buttonDisabled }
            className="btn-form-register"
          >
            Cadastrar
          </Button>

          <Button
            onClick={ () => onClick() }
            disabled={ undefined }
            className="btn-form-cancel"
          >
            Cancelar
          </Button>

        </form>
      ) : (
        <Button
          onClick={ () => setShowForm(true) }
          disabled={ undefined }
          className="register-button"
        >
          Cadastrar nova senha
        </Button>
      )}
    </div>
  );
}

export default Form;
