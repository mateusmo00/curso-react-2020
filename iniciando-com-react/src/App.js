import React from 'react';

class App extends React.Component{

  state = {
    nome : ''
  }

  criaComboBox = () => {
    const opcoes = [ "opc - 1", "opc - 2" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render(){

    const meuComboBox = () => this.criaComboBox()

    return(
      <>
        <input type="text" value={this.state.nome} onChange={ this.modificarNome } />
        <h1>Olá {this.props.nome} sua idade é {this.props.idade}</h1>
        <meuComboBox/>
      </>
    )
  }
}

export default App;