import React, { ReactElement } from 'react';

function Form(): ReactElement {
  return (
    <div>
      <form>
        <label htmlFor="inputService">Nome do serviço</label>
        <input type="text" id="inputService" />

        <label htmlFor="inputLogin">Login</label>
        <input type="text" id="inputLogin" />

        <label htmlFor="inputPass">Senha</label>
        <input type="password" id="inputPass" />

        <label htmlFor="inputUrl">URL</label>
        <input type="text" id="inputUrl" />

        <button id="register">Cadastrar</button>
        <button id="cancel">Cancelar</button>
      </form>
    </div>
  );
}

export default Form;
