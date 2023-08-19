import ServiceList from './ServiceList';
import { ServiceData } from '../../types/typeServiceData';

type ServicesProps = {
  services: ServiceData[];
  onRemoveService: (login: string) => void;
};

function Services({ services, onRemoveService }: ServicesProps) {
  return (
    <div className="services">
      {services.length > 0 ? (
        <ServiceList
          services={ services }
          onRemoveService={ onRemoveService }
        />
      ) : (
        <p>Nenhuma senha cadastrada</p>
      )}
    </div>
  );
}

export default Services;
