import { ReactElement, useState } from 'react';

function Form(): ReactElement {
  const [showForm, setShowForm] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleCancel = () => {
    setShowForm(false);
  };

  const handlePasswordChange = (event: any) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword) ? ''
      : 'A senha não atende aos requisitos.');
  };

  const validatePassword = (pass: any) => {
    const minLength = 8;
    const maxLength = 16;

    const hasValidLength = pass.length >= minLength && pass.length <= maxLength;
    const hasLettersAndNumbers = /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(pass);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(pass);

    return hasValidLength && hasLettersAndNumbers && hasSpecialCharacter;
  };

  return (
    <div>
      {showForm ? (

        <form>
          <label htmlFor="inputService">Nome do serviço</label>
          <input type="text" id="inputService" required />

          <label htmlFor="inputLogin">Login</label>
          <input type="text" id="inputLogin" required />

          <label htmlFor="inputPass">Senha</label>
          <input
            type="password"
            id="inputPass"
            value={ password }
            onChange={ handlePasswordChange }
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

          <label htmlFor="inputUrl">URL</label>
          <input type="text" id="inputUrl" />

          <button id="register">Cadastrar</button>
          <button id="cancel" onClick={ handleCancel }>Cancelar</button>
        </form>
      ) : (
        <button id="button">Cadastrar nova senha</button>
      )}
    </div>
  );
}

export default Form;
