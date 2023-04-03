import React from "react";

import Contador from './components/contador/Contador'
import Input from './components/formulario/input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import ParOuImpar from './components/condicional/ParOuImpar'
import Usuario from './components/condicional/Usuario'
import Familia from './components/basicos/Familia'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Membro from './components/basicos/Membro'
import "./App.css";
import Card from './components/Layout/Card'
import Aleatorio from './components/basicos/NumeroAleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParamentro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <>

        <h1>Fundamentos do REACT 2</h1>
        <div className="app">
            <div className="cards">
                <Card titulo="012 - Componente contador (Class)" color="#000"  >
                    <Contador numeroInicial={100}></Contador>
                </Card>
                <Card titulo="011 - componente controlado (input)" color="#000"  >
                    <Input></Input>
                </Card>
                <Card titulo="010 - Comunicação direta" color="#000"  >
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicação direta" color="#000"  >
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#08 - Par ou Impar" color="#000"  >
                    <ParOuImpar numero={3}>  </ParOuImpar>
                    <Usuario usuario={{ nome: 'caio' }}></Usuario>
                </Card>
                <Card titulo="#07 - desafio com produto" color="#000"  >
                    <TabelaProdutos />
                </Card>
                <Card titulo="#06 - lista com repetição" color="#000"  >
                    <ListaAlunos />
                </Card>
                <Card titulo="#05 - Componente com filhos" color="#ffd3b6"  >
                    <Familia sobrenome="Silva" >
                        <Membro nome="caio" />
                        <Membro nome="Jose" />
                        <Membro nome="Carlos" sobrenome="Cajú" />
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio Aleatorio" color="#2ab7ca">
                    <Aleatorio min={2} max={10} />
                </Card>
                <Card titulo="#03 - Fragmentado" color="#851e3e ">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Matemática" color="#283655     ">
                    <ComParamentro
                        titulo="PROVA DE MATEMATICA"
                        nome="Caio"
                        nota={10}>
                    </ComParamentro>
                </Card>
                <Card titulo="#01 - Primeiro" color="#f9caa7">
                    <Primeiro> </Primeiro>
                </Card>
            </div>
        </div>

    </>

