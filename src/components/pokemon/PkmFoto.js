import React from 'react'


const PkmFoto = ({ pokemon }) => {
    return (
        <div className="container-foto">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    );
}

export default PkmFoto;