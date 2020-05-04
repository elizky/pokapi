import React, { Fragment, useContext } from 'react'
import Buscador from './Buscador'
import ListaPokemon from './ListaPokemon'
import { PokemonContext } from '../context/PokemonContext'

const Main = () => {
    const { pokemon } = useContext(PokemonContext)


    return (
        <Fragment>
            <main>
                <h6> Base de Datos de Pokemon</h6>
                <Buscador />
                <div id="contenido" className="contenedor-main">
                    {pokemon.length !== 0 ? <ListaPokemon /> : null} 
                </div>
            </main>
        </Fragment>
    )
};

export default Main;