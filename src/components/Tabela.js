import React from 'react'

const Tabela = (props) => {
	return(
		<table className='table'>
        	<thead>
          		<tr>
            		<th scope='col'>Linha</th>
            		<th scope='col'>Sentido</th>
            		<th scope='col'>Parada</th>
          		</tr>
        	</thead>
        	<tbody>
                <tr>
                <td>{props.linha}</td>
                <td>{props.sentido}</td>
                <td>{props.ponto}º</td>
                <td>
                 <button className='btn btn-primary' 
                    onClick={() => {window.open('https://www.google.com.br/maps/place/'+props.latitude+','+props.longitude)}}>
                    VER NO MAPA</button>
                </td>
                </tr>
        	</tbody>
      </table>
	)
}

export default Tabela