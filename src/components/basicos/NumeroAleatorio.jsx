/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    const {min, max} = props;

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <>
            <p>valor minino: {min}</p>
            <p>valor maximo: {max}</p>
            <p>o numero sorteado foi o {random}</p>
        </>
    )
}