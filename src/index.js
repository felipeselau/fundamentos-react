import './index.css'
import  ReactDOM  from 'react-dom';
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Segundo Componente"
            subtitulo="Usando Parâmetros"
            adicional="E props!" />
    </div>,
    document.getElementById('root')
)