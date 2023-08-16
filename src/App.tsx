import { ReactElement } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import './App.css';

function App(): ReactElement {
  return (
    <main>
      <Header />
      <Section />
    </main>
  );
}

export default App;
