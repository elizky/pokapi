import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import Pokemon from './Pokemon'


const ListaPokemon = () => {

    const { pokemon } = useContext(PokemonContext)

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