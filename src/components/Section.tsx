import { useState } from 'react';
import { ServiceData } from '../interface/interfaceForm';
import Form from './Form/Form';
import Services from './Services';
import RegisterButton from './RegisterButton';

function Section() {
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
  const handleRemoveService = (index: number) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <section>
      {showForm ? (
        <Form onRegister={ handleRegisterService } />
      ) : (
        <>
          <Services services={ services } onRemoveService={ handleRemoveService } />
          <RegisterButton onClick={ () => handleShowForm() } />
        </>
      )}
    </section>
  );
}

export default Section;
