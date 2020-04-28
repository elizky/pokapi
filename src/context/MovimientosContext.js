import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const MovimientoContext = createContext()

const MovimientoProvider = (props) => {

    const [movimiento, guardarMovimiento] = useState([])

    const [consultar, guardarConsultar] = useState(false)

    console.log(movimiento)

    useEffect(() => {
        if (consultar) {
            const obtenerMovimiento = async () => {
                const url = `https://pokeapi.co/api/v2/move/${movimiento}`
                const resultado = await axios.get(url)
                console.log(resultado.data)
                guardarMovimiento(resultado.data)
            }
            obtenerMovimiento()
        }
    })


    return (
        <MovimientoContext.Provider
            value={{
                movimiento,
                guardarMovimiento,
                guardarConsultar
            }}
        >
            {props.children}
        </MovimientoContext.Provider>
    );
}

export default MovimientoProvider;