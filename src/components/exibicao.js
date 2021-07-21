import React, { Component } from 'react';

  


  const Exibicao = (props) => {
    return( <div className="App">
            <header className="App-header">
              <h3  style={{color: "red"}} > pega:  {props.mensagem} </h3>
            </header>
      </div>
    );
  };

  export default Exibicao;