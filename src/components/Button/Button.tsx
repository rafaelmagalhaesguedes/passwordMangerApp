import { ReactElement } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: string;
  disabled: boolean | undefined;
  className: string;
};

function Button({
  children,
  onClick,
  disabled,
  className }: ButtonProps): ReactElement {
  return (
    <div className="button-register">
      <button
        id="button"
        disabled={ disabled }
        className={ className }
        onClick={ onClick }
      >
        { children }
      </button>
    </div>
  );
}

export default Button;
