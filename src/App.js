// Criação do Elemento Square que irá compor o tabuleiro
import './App.css'; // Importando CSS
import { useState } from 'react'; // Importando States para gravação


// Square separado e tratando eventos
function Square({valor, onSquareClick}){ // Square volta a ter propriedades, agora DUAS
  
  // Função de Evento do Tabuleiro
  return(
    
    /* Nome da Classe - square
    Ao Click - Apresenta valor */

    <button className="square" onClick={onSquareClick}> {/* Mostra o valor passado */}
              {valor}
    </button>
  );
}


// Criando botões
// Exportando Função Padrão - Tabuleiro
export default function Tabuleiro(){
  
  // Variável de Estado do Tabuleiro

  /* Const - Variável Constante
     Variáveis - squares e setSquares
     Const também é considerado um "Array
     useState retorna Arrays de DOIS elementos"
     
     exemplo:  
     
     const [stateVariable, setStateVariable] = useState(initialValue);
     stateVariable - É o nome da Variável
     setStateVariable - É a função que atualiza a anterior (setStateVariable)
     initualValue - O valor inical que gostaríamos de indereçar à variável de estado (poder ser número, string, booleano
     */

  const [squares, setSquares] = useState(Array(9).fill(null)); // Preenchimento de Array
  
  // Variável secundária
  // Retorno de um valor de estado e uma Função para atualizar 

  const [xIsNext, setXIsNext] = useState(true);

  /* SE squares = índice [i] OU se existir um Vencedor
     retorna */
  function handleClick(i){ // i = índice
    if(squares[i] || existeVencedor(squares)) // "||" = Condição de "OU";
    { return };
    
    // Handle Click continua pois o RETURN não foi executado
    const nextSquares = squares.slice(); 
    // Guarda em "nextSquares" uma cópia da String e atribui um valor ("X" ou "O")
    if(xIsNext)
    {nextSquares[i] = "X";}
    else
    {nextSquares[i] = "O";}
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // Variável para armazenar o vencedor
  /* Função existeVencedor chama o Array squares
     Retorna X ou O
     let status guarda a frase que vai ser apresentada na tela do player
     SE houver vencedor (ou seja, não null), retorna mensagem -> "Vencedor" + resultado/símbolo-chave
     SE não houver vencedor, resulta em null, o Array foi preenchido então marcará empate
    */
  const vencedor = existeVencedor(squares);

  // Variável para status do jogo (vencedor, empate ou próximo movimento)
  let status;
  if (vencedor) {
    status = "Vencedor: " + vencedor;
  } else if (!squares.includes(null)) { // Se não existe mais "null", significa empate
    status = "Empate!";
  } else {
    status = "Próximo: " + (xIsNext ? "X" : "O");
  }

  // Componente possui function e return
  return(// Padronizando Square como um botão
    <div> {/* Criando GRIDS por Div para o jogo da velha */}
      <div className="status">{status}</div> {/* Mostra o status do jogo */}
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


// Função para apresentar o Vencedor:
function existeVencedor(squares)
{
  // Combinações vencedoras (linhas, colunas e diagonais)
  // Variáveis Constantes - "linhas"
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Verifica cada linha vencedora
  // Let não irá permitir que o Array [a, b, c] seja redeclarado, mantendo a ordem da lista.
  for (let [a, b, c] of linhas) {

    /* Primeiro squares a -> Serve para verificar se existe algum valor em a (Se for "null" ou "undefined", o "if" falha e o código quebra)
       squares a === b -> Verifica se os valores são iguais 
       squares a === c -> Verifica se ambos também são iguais
       
       SE FOR VERDADEIRO

       o return squares[a] devolve um símbolo (X ou O)

       */
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retorna "X" ou "O"
    }
  }

  // Se não encontrou vencedor, retorna null
  return null;
}
