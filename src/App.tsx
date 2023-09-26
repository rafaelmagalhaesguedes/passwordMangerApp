import { ReactElement } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { GlobalStyle } from './globalStyles';

function App(): ReactElement {
  return (
    <div className="container">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
