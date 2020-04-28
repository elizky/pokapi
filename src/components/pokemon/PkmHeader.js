import React from 'react'


const PkmHeader = ({pokemon}) => {



    // const hp = (pokemon) => {
    //     let stats = pokemon.stats
    //     let hpObjetc = stats.find(stat => stat.stat.name === "hp")
    //     let hp = hpObjetc.base_stat
    // }

    return (
        <div className="container-data">
            {/* <h3>{hp(pokemon)}  LP</h3> */}
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.id}</h3>
        </div>
    );
}

export default PkmHeader;