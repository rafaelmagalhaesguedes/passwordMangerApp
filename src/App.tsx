import { ReactElement, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';

function App(): ReactElement {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="container">
      <Header />

      {showForm ? (
        <Form />
      ) : (
        <button id="button" onClick={ handleShowForm }> Cadastrar nova senha </button>
      )}
    </div>
  );
}

export default App;
