interface ServiceCheckBoxProps {
  hidePasswords: boolean;
  onPasswordVisibilityChange: () => void;
}

function ServiceCheckBox(props: ServiceCheckBoxProps) {
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

export default ServiceCheckBox;
