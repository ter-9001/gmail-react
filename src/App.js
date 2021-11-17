import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import loginEmail from './loginEmail'
import { render } from 'react-dom';
import dadosDeLogin from './database/login.json'
import Home from './home'





   
   
   








class App extends Component
{
  constructor(props) {
  super(props);
  this.state = 
  {
    fase: 'email',
    email: '',
    problema: 0
  };
}
enviarDados = () =>
{
  
  var dadoChecar = document.getElementById('dados').value;
  var atualFase = this.state.fase;
  var proxFase;
  var a;
  var email;


  if(atualFase == 'email')
  {    
      proxFase = 'senha'
      email = dadoChecar 
  }
  if(atualFase == 'senha')
  {
    proxFase = 'logado'
  }   



                  dadosDeLogin.filter( (obj)=> {


                    var a;

                     
                    if(obj[atualFase] ==  dadoChecar)
                    {
                      this.setState({
                        fase: proxFase,
                        problema: 0,
                        email: email,
                        
                      })
              
                    
              
                      document.getElementById('dados').value = null;
              
                    }
                    else
                    {
                      this.setState({
                        problema: 1,
                        email: email,
                        ...this.state
                      })


                    
                    }
              
              
                })
        



}

  

render()
{

  const {fase, email, problema} = this.state;
  

        return(
       

             
                <div>
                      {
                      fase == 'logado'?  
                        <Home email={email}/> : 
                        loginEmail(fase, email , this.enviarDados, problema)
                      }
                </div>
              
                  
                  
    
                
        );
}






}
export default App;
