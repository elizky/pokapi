import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const MovimientoContext = createContext()

const MovimientoProvider = (props) => {


    const [movimientos, guardarMovimientos] = useState([])
    const [movimiento, guardarMovimiento] = useState([])
    const [mov, guardarMov] = useState({})


    console.log('movimientos', movimientos)
    // console.log('movimiento', movimiento)
    // console.log('mov Obj',mov)
    useEffect(() => {
        if (movimientos.length > 0) {
            const obtenerMovimiento = async () => {
                const url = `https://pokeapi.co/api/v2/move/${movimiento}`
                const resultado = await axios.get(url)
                console.log(resultado.data)
                guardarMov(resultado.data)
            }
            obtenerMovimiento()
        }
    }, [movimiento])

    return (
        <MovimientoContext.Provider
            value={{
                mov,
                movimientos,
                movimiento,
                guardarMovimientos,
                guardarMovimiento,
                guardarMov
            }}>
            {props.children}
        </MovimientoContext.Provider>
    );
}

export default MovimientoProvider;