import React, { Component } from 'react';
import axios from 'axios';
import Exibicao from './exibicao'
//import api from "./services/api";

const api = axios.create({
    baseURL: 'http://localhost:3001/',
  });

class Cadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameCidade: '',
            nameEstado: '',
            mensagem: '',
            tes: ''
        };
    this.handleInputChangeCidade = this.handleInputChangeCidade.bind(this);
    this.handleInputChangeEstado = this.handleInputChangeEstado.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
    }
    
    handleInputChangeCidade(event) { 
        const target = event.target;
        
        const value = target.value
        this.setState({
          nameCidade: value
        });
    }    
    handleInputChangeEstado(event) { 
        const target = event.target;
       
       const value = target.value
       {<Exibicao nameEstado={this.state.nameEstado}/>}
        this.setState({
          nameEstado: value
        });
        
    }    
    
    handleSubmit(event){
      alert('tem certeza que os dados, ' + this.state.nameEstado +' e ' +this.state.nameCidade + ' estão corretos ? ' );
       event.preventDefault();  

        let nameCidade = this.state.nameCidade 
        let nameEstado = this.state.nameEstado
        api.post('api/v1/states',  {nameEstado, nameCidade  })
        .then(response => {
            console.log(response)
            {<Exibicao nameEstado={this.state.nameEstado}/>}
            this.setState({
                mensagem: response.data

                
            })
            if(this.state.mensagem ==="Erro! Estado ou Cidade não existe no Brasil") {
                <Exibicao nameEstado={this.state.nameEstado}/>
               // this.tes = "Erro! Estado ou Cidade não existe no Brasil"
               this.setState({
                tes: 'error'
               })
            }else if (this.state.mensagem ==="cadastro ja existe!"){
                this.setState({
                    tes: 'error'
                   })
                
            }else{
                this.setState({
                    tes: 'cadastro realizado com sucesso!'
                })
            }  
           
           
        })
        .catch(error => {console.log(error)})
       
    }    

    componentDidMount() {
        //let nameCidade = this.state.nameCidade 
        let nameEstado = this.state.nameEstado
        api.get('api/v1/states', {nameEstado: "oi" })
        .then(response => {
            console.log(response)
            this.setState({
                //nameEstado: response.data
            })
        })
        .catch(error => {console.log(error)})
       
        

    }
    render() {
        return (
          <>
          <div style={{marginLeft: '550px ',}}>
            <p style={{ color: this.state.mensagem == "cadastro realizado com sucesso!" ? "blue" : "red" }}>{this.state.mensagem}</p>
         </div>
           <form onSubmit={this.handleSubmit}>
                
                <label style={divStyle}>
                Nome do Estado:
                <input
                    name="nameEstado"
                    type="text"
                    placeholder="Estado"
                    value={this.state.nameEstado}
                    onChange={this.handleInputChangeEstado} />
                </label >
                <br/>
                <br/>

                <label style={divStyle}>
                Nome da Cidade:
                <input
                    name="nameCidade"
                    type="text"
                    placeholder="Cidade"
                    value={this.state.nameCidade}
                    onChange={this.handleInputChangeCidade} />
                </label>

                <input type="submit" value="Enviar" />
          </form>
          
         
               
         </>
        )
    }

    
}



const divStyle = {
    margin: '10px 0',
    padding: '15px',
   // border: '1px solid #ccc'
  };

export default Cadastro;