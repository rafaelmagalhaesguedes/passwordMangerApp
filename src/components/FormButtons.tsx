import React, { ReactElement } from 'react';

interface FormButtonsProps {
  registerDisabled: boolean;
  onRegisterClick: () => void;
  onCancelClick: () => void;
}

function FormButtons({
  registerDisabled,
  onRegisterClick,
  onCancelClick,
}: FormButtonsProps): ReactElement {
  return (
    <div className="buttons-form">
      <button
        id="cancel"
        className="btn-cancel"
        onClick={ onCancelClick }
      >
        Cancelar
      </button>

      <button
        id="register"
        disabled={ registerDisabled }
        onClick={ onRegisterClick }
        className="btn-register"
      >
        Cadastrar
      </button>
    </div>
  );
}

export default FormButtons;
