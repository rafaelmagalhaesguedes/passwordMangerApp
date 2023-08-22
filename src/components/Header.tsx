import { ReactElement } from 'react';
import Title from './Header/Title';

function Header(): ReactElement {
  return (
    <header>
      <Title>Gerenciador de senhas</Title>
    </header>
  );
}

export default Header;
