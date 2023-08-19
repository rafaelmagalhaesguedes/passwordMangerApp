import { ServiceData } from '../../interface/interfaceForm';

interface ServiceListProps {
  services: ServiceData[];
  hidePasswords: boolean;
  onRemoveService: (login: string) => void;
}

function ServiceList(props: ServiceListProps) {
  const { services, hidePasswords, onRemoveService } = props;

  return (
    <ul>
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
  );
}

export default ServiceList;
