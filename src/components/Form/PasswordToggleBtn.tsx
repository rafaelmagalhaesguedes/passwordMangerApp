import { ReactElement } from 'react';

interface PassToggleBtnProps {
  passwordType: string;
  onClick: () => void;
}

function PasswordToggleBtn({ passwordType, onClick }: PassToggleBtnProps): ReactElement {
  return (
    <button
      id="togglePassword"
      data-testid="show-hide-form-password"
      type="button"
      onClick={ onClick }
    >
      {passwordType === 'password' ? 'Mostrar Senha' : 'Esconder Senha'}
    </button>
  );
}

export default PasswordToggleBtn;
