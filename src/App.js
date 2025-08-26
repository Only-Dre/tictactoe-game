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
  // Criação de 9 espaços com Array
  const [squares, setSquares] = useState(Array(9).fill(null)); // Preenchimento de Array
  
  function handleClick(i){ // i = índice
    const nextSquares = squares.slice(); // Irá guardar em "nextSquares" uma cópia do Array
    // Acessando índice
    nextSquares[i] = "X"
    setSquares(nextSquares); // Guarda a mudança
  }

  // Componente possui function e return
  return(// Padronizando Square como um botão
    <div> {/* Criando GRIDS por Div para o jogo da velha */}
      <div> {/* Números de Array em squares */}
        <Square valor={squares[0]} onSquareClick={() => {handleClick(0)}}/>
        <Square valor={squares[1]} onSquareClick={() => {handleClick(1)}} />
        <Square valor={squares[2]} onSquareClick={() => {handleClick(2)}} />
      </div>
      <div>
        <Square valor={squares[3]} onSquareClick={() => {handleClick(3)}} />
        <Square valor={squares[4]} onSquareClick={() => {handleClick(4)}} />
        <Square valor={squares[5]} onSquareClick={() => {handleClick(5)}} />
      </div>
      <div>
        <Square valor={squares[6]} onSquareClick={() => {handleClick(6)}} />
        <Square valor={squares[7]} onSquareClick={() => {handleClick(7)}} />
        <Square valor={squares[8]} onSquareClick={() => {handleClick(8)}} />
      </div>
    </div>
  )
}