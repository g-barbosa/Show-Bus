
import React, {useState, useEffect} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

const BuscaBus = () => {
  const [linha, setLinha] = useState('')
  const [numero, setNumero] = useState('')
  const [veiculos, setVeiculos] = useState([])

  const onChange = event => {
    setNumero(event.target.value)
  }

  useEffect(() => {
    axios
    .get('https://noxxonsat-nxnet.appspot.com/rest/usuarios/v2?linha='+linha, {
      headers: {
        'Content-Type': 'application/json' ,
        'Authorization': 'ENTRE NO SITE DA EMTU PARA PEDIR UMA CHAVE'
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
      setVeiculos(linhas)
    })
  },[linha])

  return (
    <div className='App'>
    <div className="container">
    <br/>
      <input placeholder='digite o numero da linha' onChange={onChange}/>
      <button className='btn btn-success' onClick={() => {setLinha(numero)}}>OK</button>
    </div>
    <br/>
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
                  <tr>
                    <td>{i.linha}</td>
                    <td>{i.sentido}</td>
                    <td>{i.ponto}º</td>
                    <td>
                      <button className='btn btn-primary' 
                        onClick={() => {window.open('https://www.google.com.br/maps/place/'+i.latitude+','+i.longitude)}}>
                      VER NO MAPA</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default BuscaBus;
