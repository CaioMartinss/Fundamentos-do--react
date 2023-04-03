import React from 'react'


export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'aprovado' : 'reprovado';

    return (
        <div>
            <p>{props.subtitulo}</p>
            <p>a nota do {props.nome} é </p>
            <p>{props.nota}, e foi</p>
            <p>{status}.</p>
        </div>
    )
}