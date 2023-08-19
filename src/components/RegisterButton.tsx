import { ReactElement } from 'react';

interface RegisterButtonProps {
  onClick: () => void;
}

function RegisterButton({ onClick }: RegisterButtonProps): ReactElement {
  return (
    <div className="button-register">
      <button
        id="button"
        className="register-button"
        onClick={ onClick }
      >
        Cadastrar nova senha
      </button>
    </div>
  );
}

export default RegisterButton;
