import React, { useContext } from 'react'
import { MovimientoContext } from '../../context/MovimientoContext'
import Movimiento from './Movimiento'

const PkmMov = ({ movs }) => {

    const { movimientos, guardarMovimientos } = useContext(MovimientoContext)

    //guardo en el context los 4 movimientos que me traigo por parametro
    if (movimientos.length === 0) {
        guardarMovimientos(movs)
    }


    return (
        //por cada movimiento genero un componente nuevo
        <div className="container-mov">
            {movimientos.map(movimiento => (
                <Movimiento key={movimiento} value={movimiento}/>
            ))}
        </div>
    );
}

export default PkmMov;