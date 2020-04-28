import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

//Crear el context
export const CategoriasContext = createContext()

// Provider es donde estan las funciones y state

const CategoriasProvider = (props) => {

    //crear el state del context
    const [categorias, guardarCategorias] = useState([])

    //llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://pokeapi.co/api/v2/type/`
            const categorias = await axios.get(url)
            guardarCategorias(categorias.data.results)
        }
        obtenerCategorias()
    }, [])

    return (
        <CategoriasContext.Provider value={{ categorias }}>
            {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider