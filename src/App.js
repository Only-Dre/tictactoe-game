// Criação do Elemento Square que irá compor o tabuleiro
import './App.css';
import { useState } from 'react'; // Importando States para gravar



// Square separado e tratando eventos
function Square(){ // Square não possui valor direto na function agora
  const [valor, setValor] = useState(null); // Settando uma função para a variável Valor

  function handleClick(){ // Manipula o botão
    // Setta o botão clicado como X
    setValor('X');
  }
  return(
    <button className="square" onClick={handleClick}>
              {valor}
    </button>
  );
}


// Criando botões
export default function Tabuleiro(){
  // Componente possui function e return
  return(// Padronizando Square como um botão
    <div> {/* Criando GRIDS por Div para o jogo da velha */}
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}