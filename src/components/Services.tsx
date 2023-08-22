import ServiceList from './Services/ServiceList';
import { ServiceData } from '../types/types';
import Locker from '../images/locker-img.svg';
import Vetor from '../images/Vector 1.png';

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
        <div className="message-empty-services">
          <img className="vector" src={ Vetor } alt="Vetor" />
          <p className="message">Não há nenhuma senha cadastrada...</p>
          <img className="locker" src={ Locker } alt="Locker" />
        </div>
      )}
    </div>
  );
}

export default Services;
