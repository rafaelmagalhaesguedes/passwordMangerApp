import { useState } from 'react';
import { ServiceData } from '../../interface/interfaceForm';
import ServiceCheckBox from './ServiceCheckBox';

interface ServiceListProps {
  services: ServiceData[];
  onRemoveService: (login: string) => void;
}

function ServiceList(props: ServiceListProps) {
  const { services, onRemoveService } = props;
  const [hidePasswords, setHidePasswords] = useState(false);

  // Checkbox event
  const handlePasswordVisibilityChange = () => {
    setHidePasswords(!hidePasswords);
  };

  return (
    <>
      <div className="checkbox-pass">
        <ServiceCheckBox
          hidePasswords={ hidePasswords }
          onPasswordVisibilityChange={ handlePasswordVisibilityChange }
        />
      </div>

      <div className="service-list">
        <ul className="list">
          {services.map(({ login, serviceName, password, url }) => (
            <li key={ login }>
              <a href={ url } target="_blank" rel="noopener noreferrer">
                {serviceName}
              </a>
              <p>{login}</p>
              <p>{hidePasswords ? '******' : password}</p>
              <p>{url}</p>
              <button
                data-testid="remove-btn"
                onClick={ () => onRemoveService(login) }
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ServiceList;
