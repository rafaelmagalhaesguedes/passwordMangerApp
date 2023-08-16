import { ServiceData } from '../interface/interfaceForm';

interface ServicesProps {
  services: ServiceData[];
  onRemoveService: (index: number) => void;
}

function Services({ services, onRemoveService }: ServicesProps) {
  return (
    <div>
      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ul>
          {services.map((service, index) => (
            <li key={ index }>
              <a href={ service.url } target="_blank" rel="noopener noreferrer">
                {service.serviceName}
              </a>
              <p>{service.login}</p>
              <p>{service.password}</p>
              <p>{service.url}</p>
              <button
                data-testid="remove-btn"
                onClick={ () => onRemoveService(index) } // Chamando a função para remover o serviço
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Services;
