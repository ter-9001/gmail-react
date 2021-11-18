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
    dados: '',
    tipo: 'Primary'
  };
}
setTipo = (e) =>
{
  


  
   
  var elements = document.getElementsByClassName('nav3'); 
 for(var i = 0; i < elements.length; i++){
   elements[i].style.color = "#5f6368";
   elements[i].style.backgroundColor = "#ffffff";
 }

  var tipo = e.target.innerHTML;


  switch(tipo)
  {
    case 'Primary':
      this.setState({... this.state, tipo: 'Primary'});
      e.target.style.color = '#d93025';
    break;
    
    case 'Social':
      this.setState({... this.state, tipo: 'Social'});
      e.target.style.color = '#1a73e8';
    break;

    case 'Promations':
      this.setState({... this.state, tipo: 'Promations'});
      e.target.style.color = '#188038';
    break;

  }

  
  e.target.style.backgroundColor = "#ddd";
}


enviarDados = () =>
{
  
  var dadoChecar = document.getElementById('dados').value;
  document.getElementById('dados').value=''

 
  var atualFase = this.state.fase;
  var proxFase;
  var a;
  var email;



  



                 dadosDeLogin.filter( (obj)=> {

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

  const {fase, email, problema, tipo} = this.state;
  
  console.log(email)
  

        return(
       

             
                <div>
                      {
                      fase == 'logado'?  
                        <Home email={email} setTipo={(e) => this.setTipo(e)} tipo={tipo}/> : 
                        <LoginEmail
                        fase={fase} email={email} enviar={this.enviarDados} problema={problema}/>
                      }
                </div>
              
                  
                  
    
                
        );
}






}
export default App;
