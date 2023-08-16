import { ReactElement, useState, ChangeEvent, useEffect } from 'react';

interface FormData {
  serviceName: string;
  login: string;
  password: string;
}

function Form(): ReactElement {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    serviceName: '',
    login: '',
    password: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isLengthWithinRange, setIsLengthWithinRange] = useState(false);
  const [hasLettersAndNumbers, setHasLettersAndNumbers] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
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
    setIsSubmitDisabled(!(isServiceNameValid && isLoginValid && isLengthValid
      && isLengthWithinRange && hasLettersAndNumbers && hasSpecialCharacter));
  }, [formData, isLengthValid, isLengthWithinRange,
    hasLettersAndNumbers, hasSpecialCharacter]);

  const handleCancel = () => {
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
          <input type="text" id="inputUrl" />

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

          <button id="register" disabled={ isSubmitDisabled }>Cadastrar</button>
          <button id="cancel" onClick={ handleCancel }>
            Cancelar
          </button>
        </form>
      ) : (
        <button id="button">Cadastrar nova senha</button>
      )}
    </div>
  );
}

export default Form;
