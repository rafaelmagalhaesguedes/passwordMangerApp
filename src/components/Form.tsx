import Swal from 'sweetalert2';
import { ReactElement, useState, ChangeEvent, useEffect } from 'react';
import { ServiceData } from '../interface/interfaceForm';
import FormInput from './FormInput';
import RegisterButton from './RegisterButton';

// Props
interface FormProps {
  onRegister: (newService: ServiceData) => void;
}

// Form
function Form({ onRegister }: FormProps): ReactElement {
  const [showForm, setShowForm] = useState(true);
  const [services, setServices] = useState<any[]>([]);
  const [formData, setFormData] = useState<ServiceData>({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });

  // Button Cadastrar State
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  // Password States Validation
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isLengthWithinRange, setIsLengthWithinRange] = useState(false);
  const [hasLettersAndNumbers, setHasLettersAndNumbers] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

  // Button Show Password
  const [passwordType, setPasswordType] = useState<string>('password');

  // Password Check Class
  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  // Get Name
  const handleServiceNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nameValue = event.target.value;
    setFormData((prevData) => ({ ...prevData, serviceName: nameValue }));
  };

  // Get Login
  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    const loginValue = event.target.value;
    setFormData((prevData) => ({ ...prevData, login: loginValue }));
  };

  // Get Password
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setFormData((prevData) => ({ ...prevData, password: newPassword }));
    setPasswordError(validatePassword(newPassword) ? ''
      : 'A senha não atende aos requisitos.');
  };

  // Get Url
  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    const urlValue = event.target.value;
    setFormData((prevData) => ({ ...prevData, url: urlValue }));
  };

  // Validate Password
  const validatePassword = (pass: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,16}$/;
    return passwordRegex.test(pass);
  };

  // Button Show Password State
  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
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

  // Button Cancel
  const handleCancel = () => {
    setShowForm(false);
  };

  // Update States
  useEffect(() => {
    setIsLengthValid(formData.password.length >= 8);
    setIsLengthWithinRange(formData.password.length <= 16);
    setHasLettersAndNumbers(/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(formData.password));
    setHasSpecialCharacter(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(formData.password));

    const isServiceNameValid = formData.serviceName.trim() !== '';
    const isLoginValid = formData.login.trim() !== '';
    setButtonDisabled(!(isServiceNameValid && isLoginValid && isLengthValid
      && isLengthWithinRange && hasLettersAndNumbers && hasSpecialCharacter));
  }, [formData, isLengthValid, isLengthWithinRange,
    hasLettersAndNumbers, hasSpecialCharacter]);

  return (
    <div>
      {showForm ? (
        <form>
          <FormInput
            label="Nome do serviço"
            type="text"
            value={ formData.serviceName }
            onChange={ handleServiceNameChange }
          />

          <FormInput
            label="Login"
            type="text"
            value={ formData.login }
            onChange={ handleLoginChange }
            placeholder="Login"
            required
          />

          <FormInput
            label="Senha"
            type={ passwordType }
            value={ formData.password }
            onChange={ handlePasswordChange }
            required
          />

          {passwordError && <p className="error-message">{ passwordError }</p>}

          <button
            id="togglePassword"
            data-testid="show-hide-form-password"
            type="button"
            onClick={ togglePasswordVisibility }
          >
            {passwordType === 'password' ? 'Mostrar Senha' : 'Esconder Senha'}
          </button>

          <label htmlFor="inputUrl">URL</label>
          <input
            type="text"
            id="inputUrl"
            value={ formData.url }
            onChange={ handleUrlChange }
          />

          <div className={ `password-check ${isLengthValid ? valid : invalid}` }>
            Possuir 8 ou mais caracteres
          </div>
          <div className={ `password-check ${isLengthWithinRange ? valid : invalid}` }>
            Possuir até 16 caracteres
          </div>
          <div className={ `password-check ${hasLettersAndNumbers ? valid : invalid}` }>
            Possuir letras e números
          </div>
          <div className={ `password-check ${hasSpecialCharacter ? valid : invalid}` }>
            Possuir algum caractere especial
          </div>

          <button
            id="register"
            disabled={ buttonDisabled }
            onClick={ handleRegister }
          >
            Cadastrar
          </button>

          <button id="cancel" onClick={ handleCancel }>
            Cancelar
          </button>
        </form>
      ) : (
        <RegisterButton onClick={ () => setShowForm(true) } />
      )}
    </div>
  );
}

export default Form;
