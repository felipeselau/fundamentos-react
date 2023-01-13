import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aluno from './components/basicos/Aluno'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos"


export default _ =>

    <div id="app">
        <h2 className="titulo">Fundamentos React</h2>
        <Card titulo="#07 - Lista de Produtos">
            <TabelaProdutos></TabelaProdutos>
        </Card>
        <Card titulo="#06 - Repetição">
            <ListaAlunos></ListaAlunos>
        </Card>
        <Card titulo="#05 - Componente com Filhos">
            <Familia sobrenome='Ferreira'>
                <FamiliaMembro nome='Pedro'/>         
                <FamiliaMembro nome='Ana'/>
                <FamiliaMembro nome='Gustavo' />
            </Familia>
        </Card>
        <Card
            titulo="#04 - Desafio Aleatório">
            <Aleatorio min={1} max={20} />
        </Card>
        
        <Card
            titulo="#03 - Desafio Parâmetro">
            <Aluno
                titulo="Situação da aluna"
                nome="Amanda"
                nota={7} />
        </Card>

        <Card
            titulo="#02 - Componente com Parâmetro">
            <ComParametro
                titulo="Segundo Componente"
                subtitulo="Usando Parâmetros"
                adicional="E props!" />
        </Card>

        <Card
            titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>

