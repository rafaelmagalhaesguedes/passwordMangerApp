import { ServiceData } from '../../interface/interfaceForm';

interface ServiceListProps {
  services: ServiceData[];
  hidePasswords: boolean;
  onRemoveService: (index: number) => void;
}

function ServiceList(props: ServiceListProps) {
  const { services, hidePasswords, onRemoveService } = props;

  return (
    <ul>
      {services.map((service, index) => (
        <li key={ index }>
          <a href={ service.url } target="_blank" rel="noopener noreferrer">
            {service.serviceName}
          </a>
          <p>{service.login}</p>
          <p>{hidePasswords ? '******' : service.password}</p>
          <p>{service.url}</p>
          <button
            data-testid="remove-btn"
            onClick={ () => onRemoveService(index) }
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
