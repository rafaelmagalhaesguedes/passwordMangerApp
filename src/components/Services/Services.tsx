import { useState } from 'react';
import PassdVisibilityCheckbox from './CheckboxPassword';
import ServiceList from './ServiceList';
import { ServiceData } from '../../interface/interfaceForm';

interface ServicesProps {
  services: ServiceData[];
  onRemoveService: (index: number) => void;
}

function Services({ services, onRemoveService }: ServicesProps) {
  const [hidePasswords, setHidePasswords] = useState(false);

  // Checkbox event
  const handlePasswordVisibilityChange = () => {
    setHidePasswords(!hidePasswords);
  };

  return (
    <div>
      <PassdVisibilityCheckbox
        hidePasswords={ hidePasswords }
        onPasswordVisibilityChange={ handlePasswordVisibilityChange }
      />
      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ServiceList
          services={ services }
          hidePasswords={ hidePasswords }
          onRemoveService={ onRemoveService }
        />
      )}
    </div>
  );
}

export default Services;
