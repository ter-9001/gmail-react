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
    dadosDeLogin: dadosDeLogin,
    problema: 0
  };
}
enviarDados = () =>
{
  var emailChecar = document.getElementById('dados').value;
  var atualFase = this.state.fase;
  var proxFase;
  var a;


  if(atualFase == 'email')
  {    
      proxFase = 'senha'
  }
  if(atualFase == 'senha')
  {
    proxFase = 'logado'
  }   



                  dadosDeLogin.filter( (obj)=> {


                    var a;

                     
                    if(obj[atualFase] ==  emailChecar)
                    {
                      this.setState({
                        fase: proxFase,
                        email: emailChecar,
                        dadosDeLogin: this.state.dadosDeLogin,
                        problema: 0
                      })
              
                    
              
                      document.getElementById('dados').value = null;
              
                    }
                    else
                    {
                      this.setState({
                        fase: this.state.fase,
                        email: emailChecar,
                        dadosDeLogin: this.state.dadosDeLogin,
                        problema: 1
                      })


                    
                    }
              
              
                })
        



}

  

render()
{

  const {fase, email} = this.state;

        return(
       

             
                <div>
                  {fase == 'logado'?  <div> 
                     <Home/>
                  </div> : loginEmail(fase, email , this.enviarDados, this.state.problema)}
                </div>
              
                  
                  
    
                
        );
}






}
export default App;
