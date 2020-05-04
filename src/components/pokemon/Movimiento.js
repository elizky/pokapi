import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Movimiento = ({ value }) => {

    const [movimiento, guardarMovimiento] = useState(null)

    useEffect(() => {
        const obtenerMovimiento = async () => {
            const url = `https://pokeapi.co/api/v2/move/${value}`
            try {
                const resultado = await axios.get(url)
                console.log(resultado.data)
                guardarMovimiento(resultado.data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerMovimiento()
    }, [])

    return (
        <div className="movimientos" id={value}>
            {movimiento ?
                <div className="movimiento">
                    <div >
                        <h2 className={movimiento.type.name} >{movimiento.name}</h2>
                    </div>
                    <ul>
                        <li className="poder">
                            {(movimiento.power === null) ? "0" : movimiento.power} PW
                        </li>
                        <li className="accuracy">
                            {(movimiento.accuracy === null) ? "0" : movimiento.accuracy} %
                        </li>
                    </ul>
                </div>
                : null}

        </div>
    );
}

export default Movimiento;