import React from "react";
import If, { Else } from "./if";


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const usario = props.usuario || {}
    return (
        <div>
            <If test={usario && usario.nome}>
                seja bem vindo {usario.nome}
                <Else>
                    seja bem vindo <strong>amigao</strong>
                </Else>
            </If>
        </div>
    )
}