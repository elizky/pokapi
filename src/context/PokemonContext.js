import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const PokemonContext = createContext()

const PokemonProvider = (props) => {

    const [pokemon, guardarPokemon] = useState([])
    const [busqueda, buscarPokemon] = useState({
        region: '',
        // tipo: ''
    })
    const [consultar, guardarConsultar] = useState(false)

    const { region} = busqueda
    let pokeid = Math.floor((Math.random() * region) + 1);


    useEffect(() => {
        if (consultar) {
            const obtenerPokemon = async () => {
                const url = `https://pokeapi.co/api/v2/pokemon/${pokeid}`
                const resultado = await axios.get(url)
                guardarPokemon(resultado.data)
            }
            obtenerPokemon()
        }
    }, [busqueda])

    return (
        <PokemonContext.Provider
            value={{
                pokemon,
                buscarPokemon,
                guardarConsultar
            }}
        >
            {props.children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;