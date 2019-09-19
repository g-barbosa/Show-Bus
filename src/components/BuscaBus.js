
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Tabela from './Tabela'

function BuscaBus(props) {
  const [veiculos, setVeiculos] = useState([])

  useEffect(() => {
    axios
    .get('https://noxxonsat-nxnet.appspot.com/rest/usuarios/v2?linha='+props.linha, {
      headers: {
        'Content-Type': 'application/json' ,
        'Authorization': 'Basic YmxvZ3Nkb2dpbzpibG9nc2RvZ2lvQDEyMzQ1Ng=='
      }
    })
    .then(response => {
      let linhas = []
      response.data.linhas[0].veiculos.forEach(i => {
        linhas.push({
          linha: i.codigoLinha, 
          sentido: i.sentidoLinha, 
          ponto: i.seqPonto, 
          latitude: i.latitude,
          longitude: i.longitude
        })
      })
      console.log(veiculos)
      setVeiculos(linhas)
    })
    .catch(err => {

    })
  },[props.linha])

  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Linha</th>
            <th scope='col'>Sentido</th>
            <th scope='col'>Parada</th>
          </tr>
        </thead>
        <tbody>
            {
              veiculos.map(i => {
                return (
                  <Tabela 
                  linha={i.linha} 
                  sentido={i.sentido} 
                  arada={i.ponto} 
                  latitude={i.latitude} 
                  longitude={i.longitude}/>
                )
              })
            }
        </tbody>
      </table>
    </div>
  );
}

export default BuscaBus;
