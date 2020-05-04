import React, { createContext, useState } from 'react'
export const MovimientoContext = createContext()

const MovimientoProvider = (props) => {


    const [movimientos, guardarMovimientos] = useState([])
    return (
        <MovimientoContext.Provider
            value={{
                movimientos,
                guardarMovimientos
            }}>
            {props.children}
        </MovimientoContext.Provider>
    );
}

export default MovimientoProvider;