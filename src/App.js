import React, { Component } from 'react';
//import './App.css';
//import ListsContainer from './components/ListsContainer';
import Cadastro from './components/cadastro.js';
import Exibicao from './components/exibicao.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{color: "green", marginLeft: "590px"}} className="App-title">comeco!</h1>
        </header>
        <Cadastro/>
        
      </div>
    );
  }
}

export default App;