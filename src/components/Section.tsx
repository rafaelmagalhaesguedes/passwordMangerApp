import { useState } from 'react';
import { ServiceData } from '../interface/interfaceForm';
import Form from './Form';
import Services from './Services';

function Section() {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<ServiceData[]>([]); // Inicializa com um array vazio

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleRegisterService = (newService: ServiceData) => {
    setServices([...services, newService]);
    setShowForm(false);
  };

  return (
    <section>
      {showForm ? (
        <Form onRegister={ handleRegisterService } />
      ) : (
        <>
          <Services services={ services } />
          <button id="button" onClick={ handleShowForm }>
            Cadastrar nova senha
          </button>
        </>
      )}
    </section>
  );
}

export default Section;