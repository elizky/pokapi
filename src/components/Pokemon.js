import React, { Fragment } from 'react'

import PkmHeader from './pokemon/PkmHeader'
import PkmFoto from './pokemon/PkmFoto'
import PkmTipo from './pokemon/PkmTipo'
import PkmMov from './pokemon/PkmMov'
import PkmFooter from './pokemon/PkmFooter'


const Pokemon = ({ pokemon }) => {

    return (
        <Fragment>
            <PkmHeader pokemon={pokemon} />
            <PkmFoto pokemon={pokemon} />
            <PkmTipo pokemon={pokemon} />
            <PkmMov pokemon={pokemon} />
            <PkmFooter pokemon={pokemon} />
        </Fragment>

    );
}

export default Pokemon;