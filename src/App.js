import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import loginEmail from './LoginEmail'
import { render } from 'react-dom';




    

   
   
   








class App extends Component
{
  constructor(props) {
  super(props);
  this.state = {};
}
  

render()
{
        return(
       

             
                <div>
                  {loginEmail('senha','gabriel123@gmail.com')}
                </div>
              
                  
                  
    
                
        );
}






}
export default App;
