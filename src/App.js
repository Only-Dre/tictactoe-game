// Criação do Elemento Square que irá compor o tabuleiro
import './App.css';
import { useState } from 'react'; // Importando States para gravar


// Square separado e tratando eventos
function Square({valor, onSquareClick}){ // Square volta a ter propriedades, agora DUAS
  // Função de Evento do Tabuleiro
  return(
    <button className="square" onClick={onSquareClick}> {/* Mostra o valor passado */}
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