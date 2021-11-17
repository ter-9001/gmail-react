import { render } from '@testing-library/react'
import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import Checkbox from './Checkbox'
import LogoGmail from './logoGmail'
import './App.css';
import emailDados from './database/emails.json'

 const nav3 = (e, color) =>
 {
	 //'#5f0000'


	 
		
	 var elements = document.getElementsByClassName('nav3'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.color = "#5f6368";
		elements[i].style.backgroundColor = "#ffffff";
	}



	e.target.style.color = color;
	e.target.style.backgroundColor = "#ddd";
 }   
	

const Emails = ({remetente, assunto, texto}) => 
(
	<div id='email' style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', padding: '0', height: '30px', width: '100%'}}>
				
				    <p style={{fontWeight: '800', fontFamily: 'Roboto, RobotoDraft, Helvetica,Arial,sans-serif', width: '160px'}}> {remetente}  </p>

					<h style={{fontFamily: 'Roboto, RobotoDraft, Helvetica,Arial,sans-serif', margin: '0 0 0 0', fontWeight: '700'}}>
						{assunto} 
					</h>

					<div style={{fontFamily: 'Roboto, RobotoDraft, Helvetica,Arial,sans-serif', margin: '0', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', flexBasis: '1', width: '500px'}}>
						- {texto}
					</div>
				
	</div>
)


const Home = ({email}) =>
{
	
	
		return (
			<div>
			<div id= 'navbar1' style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
				
				<button style={{background: 'none', border: 'none', margin: '0', padding: '12px', margin: '4px'}} aria-disabled="true">
					
					<svg focusable="false" viewBox="0 0 24 24" width= '24px' height='24px'>
						<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
					</svg>
				</button>





				<div style={{margin: '0 40px 0 0'}}>
						<LogoGmail/>

				</div>


				


				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px'}}>

							

						<button style={{background: 'none', border: 'none', margin: '0'}} role="button" aria-disabled="true">
							
							<svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
									<path d="M0,0h24v24H0V0z" fill="none"></path>
							</svg>
						</button>
						
						<input aria-label="Search mail" autocomplete="off" placeholder="Search mail" value="" name="q" type="text" dir="ltr" spellcheck="false" aria-haspopup="true" aria-live="off" aria-owns="gs_sbt50" style={{border: 'none', padding: '0px', margin: '0 0 0 10px', height: 'auto', width: '500px', background: 'url(&quot;data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D&quot) transparent'}}
						/>


						<button style={{background: 'none', border: 'none', margin: '0'}}

						class="gb_nf" type="button" gh="sda" role="button" data-tooltip="Show search options" aria-label="Advanced search options"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg></button>
				
				
				
				
				
				</div>






			</div>

			<div id='navbar2'>
				<Checkbox/>

				<div class="T-I J-J5-Ji nu T-I-ax7 L3" act="20" role="button" tabindex="0" jslog="110081; u014N:cOuCgd,Kr2w4b" data-tooltip="Refresh" aria-label="Refresh" style={{userSelect: 'none'}}><div class="asa"><div class="asf T-I-J3 J-J5-Ji"></div></div></div>
			</div>


			<div id='navbar3' style={{margin: '10px 0 0 10px', display: 'flex', justifyContent: 'left', flexDirection: 'row'}}>

			  <a className = {'nav3'}  onClick={(e) => nav3(e, '#d93025')}>
				    Primary
			  </a>



			  
			  <a className = {'nav3'}  onClick={(e) => nav3(e, '#1a73e8')} >
				    Social
			  </a>

			  
			  <a className = {'nav3'} onClick={(e) => nav3(e, '#188038')}>
				    Promations
			  </a>


			</div>



			<div id='emails' style={{margin:'10px 0 0 10px', fontSize: '.875rem', width: '836px', height: '20px'}}>


				
					<Emails remetente='Gabriel' assunto='Messagem Importante' texto='Bebe fofo e lindo do meu coração aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'/>

					<Emails remetente='Gabriel' assunto='Messagem Importante' texto='Bebe fofo e lindo do meu coração'/>
				

				          {
						  emailDados.map(
							  (obj) => {

								if(obj.emailDestinatário == email)
								{
									return (<Emails remetente={obj.remetente} 
									assunto={obj.assunto} texto={obj.texto}/> )
								}
							  
						 })}



			</div>







			</div>
		)
	
}



export default Home