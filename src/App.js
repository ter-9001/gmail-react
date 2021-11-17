import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import { render } from 'react-dom';
import dadosDeLogin from './database/login.json'
import Home from './home'
import LoginEmail from './loginEmail';





   
   
   








class App extends Component
{
  constructor(props) {
  super(props);
  this.state = 
  {
    fase: 'email',
    email: '',
    problema: 0,
    dados: ''
  };
}
enviarDados = () =>
{
  
  var dadoChecar = document.getElementById('dados').value;
  document.getElementById('dados').value=''

 
  var atualFase = this.state.fase;
  var proxFase;
  var a;
  var email;



  



                 dadosDeLogin.filter( (obj, i)=> {

                    if(atualFase == 'email')
                    {

                       if(obj.email == dadoChecar )
                       {
                          this.setState({
                            fase: 'senha',
                            email: dadoChecar,
                            problema: 0,
                            dados: obj
                          })


                          console.log(dadoChecar)


                          
                          
                       }
                       else
                       {
                          this.setState({
                            fase: 'email',
                            email: '',
                            problema: 1
                          })
                       }
                       
                     
                    }


                  
                    
                })
        
              


                if(atualFase == 'senha')
                {
                 

                   if(this.state.dados.senha == dadoChecar )
                   {
                    


                      this.setState({
                        fase: 'logado',
                        email: this.state.email,
                        problema: 0,
                        dados: this.state.dados
                      })

                     

                    
                   }
                   else
                   {
                      this.setState({
                        fase: this.state.fase,
                        email: this.state.email,
                        problema: 1,
                        dados: this.state.dados
                      })
                   }
                   
                 
                }           


}

  

render()
{

  const {fase, email, problema} = this.state;
  
  console.log(email)
  

        return(
       

             
                <div>
                      {
                      fase == 'logado'?  
                        <Home email={email}/> : 
                        <LoginEmail
                        fase={fase} email={email} enviar={this.enviarDados} problema={problema}/>
                      }
                </div>
              
                  
                  
    
                
        );
}






}
export default App;
