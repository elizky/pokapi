import React, { useContext} from 'react'
import { MovimientoContext } from '../../context/MovimientoContext'
import Movimiento from './Movimiento'

const PkmMov = () => {

    const { movimientos} = useContext(MovimientoContext)

    return (
        //por cada movimiento genero un componente nuevo
        <div className="container-mov">
            {movimientos.map((movimiento) => (
                <Movimiento key={movimiento.move.name} value={movimiento.move.name}/>
            ))}
        </div>
    );
}

export default PkmMov;