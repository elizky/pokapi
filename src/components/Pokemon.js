import React, { Fragment } from 'react'

import PkmHeader from './pokemon/PkmHeader'
import PkmFoto from './pokemon/PkmFoto'
import PkmTipo from './pokemon/PkmTipo'
import PkmMov from './pokemon/PkmMov'
import PkmFooter from './pokemon/PkmFooter'


const Pokemon = ({ pokemon }) => {

    //genero el array de 4 movimientos
    let movs = pokemon.moves
    let movArray = []
    for (let i = 0; i < 4; i++) {
        let movimientoRandom = movs[Math.floor(Math.random() * movs.length)];
        let movimiento = movimientoRandom.move.name
        movArray.push(movimiento)
    }

    return (
        <Fragment>
            <PkmHeader pokemon={pokemon} />
            <PkmFoto pokemon={pokemon} />
            <PkmTipo pokemon={pokemon} />
            <PkmMov movs={movArray} />
            <PkmFooter pokemon={pokemon} />
        </Fragment>

    );
}

export default Pokemon;