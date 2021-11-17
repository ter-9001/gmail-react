import { render } from '@testing-library/react'
import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'



const Checkbox = (color = "#ff0000") =>
(
	<div style={{display:'flex', justifyContent:'start', margin: '5px 1px 0px 17px', alignItems: 'end'}}>
		
		<div style={{display: 'flex', alignItems: 'stretch', alignSelf: 'center', justifyContent: 'center',border:'solid 2px', borderColor: '#202124' ,borderRadius: '25%', padding: '0', margin: '0', marginRight: '15px'}}>
	
			<input type='checkbox' style={{width: '15px', height: '15px', padding: '0' , margin: '0'}}/>

			
			
		</div>
	</div>
)



export default Checkbox


