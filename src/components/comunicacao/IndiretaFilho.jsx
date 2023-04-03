import React from 'react';
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const clicar = props.quandoClicar;
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
    const gerarNerd = () => Math.random() > 0.5;
    return (
        <div>
            <div>filho</div>
            <button onClick={
                function (e) {
                    clicar('caio', gerarIdade(), gerarNerd());
                }
            }>Fornecer informações</button>
        </div>
    )
}
