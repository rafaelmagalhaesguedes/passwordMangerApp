import { ServiceData } from '../interface/interfaceForm';

interface ServiceProps {
  services: ServiceData[];
}

function Service({ services }: ServiceProps) {
  return (
    <div>
      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ul>
          {services.map((service, index) => (
            <li key={ index }>
              <a href={ service.url } target="_blank" rel="noopener noreferrer">
                { service.serviceName }
              </a>
              <p>{ service.login }</p>
              <p>{ service.password }</p>
              <p>{ service.url }</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Service;
