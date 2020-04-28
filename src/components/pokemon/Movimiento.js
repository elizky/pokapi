import React, { useEffect, useState } from 'react'
import axios from 'axios'




const Movimiento = ({movimiento}) => {

    const [mov , guardarMovimiento] = useState(movimiento)

    
    useEffect(() => {
            const obtenerMovimiento = async () => {
                const url = `https://pokeapi.co/api/v2/move/${movimiento}`
                const resultado = await axios.get(url)
                console.log(resultado.data)
                guardarMovimiento(resultado.data)
            }
            obtenerMovimiento()
    },[])

    console.log(movimiento)

    return (
        <div className="movimientos" id={movimiento}>
            {/* <div >
                <h2 className={movimiento.type.name} >{movimiento.name}</h2>
            </div> */}
            {/* <ul>
                <li className="poder"> {movimiento.power} PW</li>
                <li className="accuracy"> {movimiento.accuracy} % </li>
            </ul> */}
        </div>

    );
}

export default Movimiento;