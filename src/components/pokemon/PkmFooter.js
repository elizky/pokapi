import React from 'react'


const PkmFooter = ({ pokemon }) => {
    return (
        <div className="container-footer">
            <p> <i className="fas fa-weight-hanging"></i> {(pokemon.weight) / 10} kg</p>
            <p> <i className="fas fa-arrows-alt-v"></i> {(pokemon.height) / 10} m</p>

        </div>
    );
}

export default PkmFooter;