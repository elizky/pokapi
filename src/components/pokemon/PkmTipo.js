import React from 'react'


const PkmTipo = ({ pokemon }) => {

    const tipos = pokemon.types
    // console.log(tipos)


    return (
        <div className="container-tipo">
            {tipos.map(tipo => (
                <div
                    key={tipo.type.name}
                    className={tipo.type.name}
                >{tipo.type.name}</div>
            ))}
        </div>

    );
}

export default PkmTipo;