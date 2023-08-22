type ServiceCheckBoxProps = {
  hidePasswords: boolean;
  onPasswordVisibilityChange: () => void;
};

function ServiceCheckBox(props: ServiceCheckBoxProps) {
  const { hidePasswords, onPasswordVisibilityChange } = props;

  return (
    <>
      <label className="label-checkbox" htmlFor="checkbox">
        Esconder senhas
      </label>
      <input
        className="checkbox"
        id="checkbox"
        type="checkbox"
        checked={ hidePasswords }
        onChange={ onPasswordVisibilityChange }
      />
    </>
  );
}

export default ServiceCheckBox;
