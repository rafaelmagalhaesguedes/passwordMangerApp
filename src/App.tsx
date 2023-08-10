import { ReactElement, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';

function App(): ReactElement {
  // Estado para controlar se o formulário deve ser exibido ou não
  const [showForm, setShowForm] = useState(false);

  // Manipulador do evento de click para mostrar formulário
  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div>
      {/* Componente Header */}
      <Header />

      {showForm ? (
        // Renderiza o componente formulário se showForm for true
        <Form />
      ) : (
        // Renderiza o botão se showForm for false
        <button id="button" onClick={ handleShowForm }> Cadastrar nova senha </button>
      )}
    </div>
  );
}

export default App;
