import { ReactElement } from 'react';

type RegisterButtonProps = {
  onClick: () => void;
  children: string;
};

function RegisterButton({ children, onClick }: RegisterButtonProps): ReactElement {
  return (
    <div className="button-register">
      <button
        id="button"
        className="register-button"
        onClick={ onClick }
      >
        { children }
      </button>
    </div>
  );
}

export default RegisterButton;
