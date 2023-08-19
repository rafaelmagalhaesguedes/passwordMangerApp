interface CheckboxPasswordProps {
  hidePasswords: boolean;
  onPasswordVisibilityChange: () => void;
}

function CheckboxPassword(props: CheckboxPasswordProps) {
  const { hidePasswords, onPasswordVisibilityChange } = props;

  return (
    <label>
      <input
        type="checkbox"
        checked={ hidePasswords }
        onChange={ onPasswordVisibilityChange }
      />
      Esconder senhas
    </label>
  );
}

export default CheckboxPassword;
