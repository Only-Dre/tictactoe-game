// Criação do Elemento Square que irá compor o tabuleiro
import './App.css';

// Criando botões
export default function Square(){
  // Componente possui function e return
  return(// Padrão square no botão - Utiliza-se DIV pois "return" não pode ter mais de um item
    <div>
      <div>
        <button classname="square">1</button>
        <button classname="square">2</button>
        <button classname="square">3</button>
      </div>
      <div>
        <button classname="square">4</button>
        <button classname="square">5</button>
        <button classname="square">6</button>
      </div>
      <div>
        <button classname="square">7</button>
        <button classname="square">8</button>
        <button classname="square">9</button>
      </div>
    </div>
  )
}