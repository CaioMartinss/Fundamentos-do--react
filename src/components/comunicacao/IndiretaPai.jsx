import React from 'react';
import IndiretaFilho from './IndiretaFilho';
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const [nome, setNome] = React.useState('?');
    const [idade, setIdade] = React.useState(0);
    const [nerd, setNerd] = React.useState(false);


    function FornecerInformacoes(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>

            <IndiretaFilho quandoClicar={(FornecerInformacoes)}></IndiretaFilho>
        </div>
    )
}