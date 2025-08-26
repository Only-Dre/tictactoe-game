// Criação do Elemento Square que irá compor o tabuleiro
import './App.css';

// Square separado

function Square({valor}){ // Square recebe um valor
  return(
    <button className="square">{valor}</button>
  );
}


// Criando botões
export default function Tabuleiro(){
  // Componente possui function e return
  return(// Padronizando Square como um botão
    <div> {/* Criando GRIDS por Div para o jogo da velha */}
      <div>
        <Square valor="1"/>
        <Square valor="2"/>
        <Square valor="3"/>
      </div>
      <div>
        <Square valor="4"/>
        <Square valor="5"/>
        <Square valor="6"/>
      </div>
      <div>
        <Square valor="7"/>
        <Square valor="8"/>
        <Square valor="9"/>
      </div>
    </div>
  )
}