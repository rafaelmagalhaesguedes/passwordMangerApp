import { useState } from 'react';
import { ServiceData } from '../types/typeServiceData';
import Form from './Form';
import Services from './Services/Services';
import RegisterButton from './RegisterButton';

function Main() {
  // States
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<ServiceData[]>([]);

  // Show Form
  const handleShowForm = () => {
    setShowForm(true);
  };

  // Register Service
  const handleRegisterService = (newService: ServiceData) => {
    setServices([...services, newService]);
    setShowForm(false);
  };

  // Remove Service
  const handleRemoveService = (login: string) => {
    const updatedServices = services.filter((service) => service.login !== login);
    setServices(updatedServices);
  };

  return (
    <main>
      {showForm ? (
        <section className="form-wrapper">
          <Form onRegister={ handleRegisterService } />
        </section>
      ) : (
        <section className="services-wrapper">
          <Services services={ services } onRemoveService={ handleRemoveService } />
          <RegisterButton onClick={ () => handleShowForm() } />
        </section>
      )}
    </main>
  );
}

export default Main;
