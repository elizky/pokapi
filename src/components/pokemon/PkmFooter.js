import React from 'react'


const PkmFooter = ({ pokemon, generarMovsRandom }) => {

    return (
        <div className="container-footer">
            <p> <i className="fas fa-weight-hanging"></i> {(pokemon.weight) / 10} kg</p>
            {/* <p><i className="fas fa-redo-alt refresh" onClick={generarMovsRandom(4, pokemon.moves)}></i> </p> */}
            <p> <i className="fas fa-arrows-alt-v"></i> {(pokemon.height) / 10} m</p>

        </div>
    );
}

export default PkmFooter;