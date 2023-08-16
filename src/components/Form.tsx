import { ReactElement, useState, ChangeEvent, useEffect } from 'react';
import { ServiceData } from '../interface/interfaceForm';

interface FormProps {
  onRegister: (newService: ServiceData) => void;
}

function Form({ onRegister }: FormProps): ReactElement {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState<ServiceData>({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isLengthWithinRange, setIsLengthWithinRange] = useState(false);
  const [hasLettersAndNumbers, setHasLettersAndNumbers] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [services, setServices] = useState<any[]>([]);
  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  const handleServiceNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nameValue = event.target.value;
    setFormData((prevData) => ({ ...prevData, serviceName: nameValue }));
  };

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    const loginValue = event.target.value;
    setFormData((prevData) => ({ ...prevData, login: loginValue }));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setFormData((prevData) => ({ ...prevData, password: newPassword }));
    setPasswordError(validatePassword(newPassword) ? ''
      : 'A senha não atende aos requisitos.');
  };

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    const urlValue = event.target.value;
    setFormData((prevData) => ({ ...prevData, url: urlValue }));
  };

  const validatePassword = (pass: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,16}$/;
    return passwordRegex.test(pass);
  };

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

  const handleCancel = () => {
    setShowForm(false);
  };

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
  };

  return (
    <div>
      {showForm ? (
        <form>
          <label htmlFor="inputService">Nome do serviço</label>
          <input
            type="text"
            id="inputService"
            value={ formData.serviceName }
            onChange={ handleServiceNameChange }
          />

          <label htmlFor="inputLogin">Login</label>
          <input
            type="text"
            id="inputLogin"
            value={ formData.login }
            onChange={ handleLoginChange }
            required
          />

          <label htmlFor="inputPass">Senha</label>
          <input
            type="password"
            id="inputPass"
            value={ formData.password }
            onChange={ handlePasswordChange }
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

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
        <div>
          <button id="button" onClick={ () => setShowForm(true) }>
            Cadastrar nova senha
          </button>
        </div>
      )}
    </div>
  );
}

export default Form;
