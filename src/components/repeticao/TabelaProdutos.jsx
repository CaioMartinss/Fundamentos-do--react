import React from 'react'
import './tabelaprodutos.css'
import produtos from '../../data/produtos'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const produtosLista = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        )
    });
    return (
        <div className='tabelaprodutos'>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>preco</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosLista}
                </tbody>
            </table>
        </div>
    )
}