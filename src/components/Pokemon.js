import React, { Fragment, useContext, useEffect } from 'react'
import { MovimientoContext } from '../context/MovimientoContext'
import PkmHeader from './pokemon/PkmHeader'
import PkmFoto from './pokemon/PkmFoto'
import PkmTipo from './pokemon/PkmTipo'
import PkmMov from './pokemon/PkmMov'
import PkmFooter from './pokemon/PkmFooter'


const Pokemon = ({ pokemon }) => {

    const { guardarMovimientos } = useContext(MovimientoContext)

    //genero el array de 4 movimientos
    let movArray
    
    function generarMovsRandom(cantidad, array) {
        const copiaArray = Array.from(array); 
        return movArray = Array.from(Array(cantidad), () => copiaArray.splice(Math.floor(copiaArray.length * Math.random()), 1)[0]);
    }
    useEffect(() => {
        generarMovsRandom(4, pokemon.moves)
        if (movArray.length > 0) {
            guardarMovimientos(movArray)
        }

    }, [])


    return (
        <Fragment>
            <PkmHeader pokemon={pokemon} />
            <PkmFoto pokemon={pokemon} />
            <PkmTipo pokemon={pokemon} />
            <PkmMov />
            <PkmFooter pokemon={pokemon} />
        </Fragment>

    );
}

export default Pokemon;