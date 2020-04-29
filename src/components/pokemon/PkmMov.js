import React from 'react'
import Movimiento from './Movimiento'

const PkmMov = ({ pokemon }) => {

    let movimientos = pokemon.moves
    let movArray = []
    for (let i = 0; i < 4; i++) {
        let movimientoRandom = movimientos[Math.floor(Math.random() * movimientos.length)];
        let movimiento = movimientoRandom.move.name
        movArray.push(movimiento)
    }
    console.log(movArray)

    
    return (
        <div className="container-mov">
            <Movimiento movimiento={movArray[0]}/>
            <Movimiento movimiento={movArray[1]}/>
            <Movimiento movimiento={movArray[2]}/>
            <Movimiento movimiento={movArray[3]}/>
        </div>
    );
}

export default PkmMov;