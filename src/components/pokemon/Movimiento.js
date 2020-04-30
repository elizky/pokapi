import React, { useContext} from 'react'
import { MovimientoContext } from '../../context/MovimientoContext'



const Movimiento = ({ value }) => {

    const { mov, guardarMovimiento } = useContext(MovimientoContext)
    guardarMovimiento(value)

    console.log('MOV', mov)
    console.log('MOVLENGTH', Object.entries(mov).length)
    

    return (

        <div className="movimientos" id={value}>
            {Object.entries(mov).length > 22 ?

                <div className='movimiento'>
                    <div >
                        <h2 className={mov.type.name} >{mov.name}</h2>
                    </div>
                    <ul>
                        <li className="poder"> {mov.power} PW</li>
                        <li className="accuracy"> {mov.accuracy} % </li>
                    </ul>
                </div> : null}

        </div>

    );
}

export default Movimiento;