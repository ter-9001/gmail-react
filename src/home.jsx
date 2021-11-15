import { render } from '@testing-library/react'
import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

const LogoGmail = () => 
(
	<div class="gb_oc gb_fe">
		<a class="gb_ee gb_pc gb_ce" aria-label="Gmail" href="#inbox" title="Gmail">
			
			<img class="gb_tc" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x " alt="" aria-hidden="true" style={{width:'109px', height:'40px'}} />

		</a>
	</div>
)




const Home = () =>
{
	
	
		return (
			<div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
				
				<div  role="button" tabindex="0">
					<svg focusable="false" viewBox="0 0 24 24">
						<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
					</svg>
				</div>





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
		)
	
}



export default Home