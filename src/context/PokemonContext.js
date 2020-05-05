import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const PokemonContext = createContext()

const PokemonProvider = (props) => {

    const [pokemon, guardarPokemon] = useState([])
    const [busqueda, buscarPokemon] = useState({ region: null, nombre: null, tipo: null })
    const [consultar, guardarConsultar] = useState(false)

    const { region, nombre, tipo } = busqueda

    let pokeid = Math.floor((Math.random() * region) + 1);


    useEffect(() => {
        if (consultar) {
            //buscarRegion es true
            if (region) {
                const obtenerPokemon = async () => {
                    try {
                        const url = `https://pokeapi.co/api/v2/pokemon/${pokeid}`
                        const resultado = await axios.get(url)
                        guardarPokemon(resultado.data)
                    } catch (error) {
                        console.log(error)
                    }
                }
                obtenerPokemon()
            }
            //buscarNombre es true
            if (nombre) {
                const obtenerPokemon = async () => {
                    try {
                        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
                        const resultado = await axios.get(url)
                        guardarPokemon(resultado.data)
                    } catch (error) {
                        alert(`Escribe bien el nombre. Has escrito ${nombre}`)
                        console.log(error)
                    }

                }
                obtenerPokemon()
            }
            //buscarTipo es true
            if (tipo) {
                const obtenerPokemon = async () => {
                    const url = `https://pokeapi.co/api/v2/type/${tipo}`
                    const resultado = await axios.get(url)
                    console.log(resultado)
                    //Dependiendo del tipo elijo uno random
                    const getPokemonByType = async (resultadoTipo) => {
                        let cantidadPokemon = resultadoTipo.pokemon.length //cant de pokemon en ese tipo
                        let arrayPokemon = resultadoTipo.pokemon // el array entero
                        let pokemon = arrayPokemon[Math.floor((Math.random() * cantidadPokemon) + 1)].pokemon.name //elijo uno random
                        var dinamicURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
                        const resultado = await axios.get(dinamicURL)
                        guardarPokemon(resultado.data)
                    }
                    getPokemonByType(resultado.data)
                }
                obtenerPokemon()
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [busqueda])

    return (
        <PokemonContext.Provider
            value={{
                pokemon,
                buscarPokemon,
                guardarConsultar,
            }}
        >
            {props.children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;