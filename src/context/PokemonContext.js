import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const PokemonContext = createContext()

const PokemonProvider = (props) => {

    const [pokemon, guardarPokemon] = useState([])
    const [busqueda, buscarPokemon] = useState({ region: '', tipo: '' })
    const [consultar, guardarConsultar] = useState(false)
    const [buscaRegion, guardarBuscaRegion] = useState(false)
    const [buscaTipo, guardarBuscaTipo] = useState(false)

    // console.log(busqueda) //no borra del state cuando se selecciona una y no la otra. Tendría que ser o región o tipo

    const { region, tipo } = busqueda

    let pokeid = Math.floor((Math.random() * region) + 1);


    useEffect(() => {
        if (consultar) {
            //buscarRegion es true
            if (buscaRegion) {
                const obtenerPokemon = async () => {
                    const url = `https://pokeapi.co/api/v2/pokemon/${pokeid}`
                    const resultado = await axios.get(url)
                    guardarPokemon(resultado.data)
                }
                obtenerPokemon()
            }
            //buscarTipo es true
            if (buscaTipo) {
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
    }, [busqueda])

    return (
        <PokemonContext.Provider
            value={{
                pokemon,
                buscarPokemon,
                guardarConsultar,
                guardarBuscaRegion,
                guardarBuscaTipo
            }}
        >
            {props.children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;