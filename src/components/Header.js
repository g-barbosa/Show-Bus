
import React, {useState} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import BuscaBus from './BuscaBus'

const Header = () => {
  const [linha, setLinha] = useState('')
  const [numero, setNumero] = useState('')

  return (
    <div className='App'>
    	<div className="container">
    		<br/>
      		<input placeholder='digite o numero da linha' onChange={event => {setNumero(event.target.value)}}/>
      		<button className='btn btn-success' onClick={() => {setLinha(numero)}}>OK</button>
    	</div>
    	<br/>
    	<div className='container'>
      		<BuscaBus linha={linha}/>
    	</div>
    </div>
  );
}

export default Header;
