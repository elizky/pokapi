import React, { Fragment } from 'react'
import Buscador from './Buscador'
import ListaPokemon from './ListaPokemon'

const Main = () => (
    <Fragment>
        <main>
            <h6> Base de Datos de Pokemon</h6>
            <Buscador />
            <div id="contenido" className="contenedor-main">
                <ListaPokemon />
            </div>
        </main>
    </Fragment>
);

export default Main;