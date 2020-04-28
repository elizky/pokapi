import React, { useContext } from 'react'
import Pokemon from './Pokemon'
import { PokemonContext } from '../context/PokemonContext'


const ListaPokemon = () => {

    const { pokemon } = useContext(PokemonContext)
    console.log(pokemon)

    return (
        <div className="card-characters" id={pokemon.id} >
            <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
            />

        </div>
    );
}

export default ListaPokemon;