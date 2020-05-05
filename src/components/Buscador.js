import React, { Fragment, useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { PokemonContext } from '../context/PokemonContext'

const Buscador = () => {

    const [busqueda, guardarBusqueda] = useState({
    })

    const { categorias } = useContext(CategoriasContext)
    const { buscarPokemon, guardarConsultar } = useContext(PokemonContext)

    //leer contenido
    const obtenerDatosBusqueda = e => {
        guardarBusqueda({
            // ...busqueda, //copiamos el state original para guardar mas busquedas (al pedo porque no se relacionan)
            [e.target.name]: e.target.value.toLowerCase()
        })
    }

    return (
        <Fragment>
            <div className="buscador">
                {/* RADIO */}
                <div className="group">
                    <h2>Buscar por region</h2>
                    <div className="inputs">
                        <input type="radio" name="region" id="rb1" value="151" onChange={obtenerDatosBusqueda} />
                        <label htmlFor="rb1">Kanto</label>
                        <input type="radio" name="region" id="rb2" value="251" onChange={obtenerDatosBusqueda} />
                        <label htmlFor="rb2">Johto</label>
                        <input type="radio" name="region" id="rb3" value="386" onChange={obtenerDatosBusqueda} />
                        <label htmlFor="rb3">Hoenn</label>
                        <input type="radio" name="region" id="rb4" value="493" onChange={obtenerDatosBusqueda} />
                        <label htmlFor="rb4">Sinnoh</label>
                        <input type="radio" name="region" id="rb5" value="649" onChange={obtenerDatosBusqueda} />
                        <label htmlFor="rb5">Unova</label>
                        <input type="radio" name="region" id="rb6" value="721" onChange={obtenerDatosBusqueda} />
                        <label htmlFor="rb6">Kalos</label>
                        <input type="radio" name="region" id="rb7" value="807" onChange={obtenerDatosBusqueda} />
                        <label htmlFor="rb7">Alola</label>
                    </div>
                </div>
                {/* TEXT */}
                <div className="group">
                    <h2>Buscar por Nombre</h2>
                    <div className="text">
                        <label className="field a-field a-field_a1">
                            <input
                                className="field__input a-field__input"
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="e.g. Charmander"
                                onChange={obtenerDatosBusqueda}
                            >
                            </input>
                        </label>
                    </div>
                    {/* BUTTON */}
                    <form onSubmit={e => {
                        e.preventDefault();
                        buscarPokemon(busqueda);
                        guardarConsultar(true);
                    }}>
                        <button
                            type="submit"
                        >Buscar</button>
                    </form>
                </div>
                {/* OPTION */}
                <div className="group">
                    <h2>Buscar por tipo</h2>
                    <div className="select">
                        <select id="tipo" name="tipo" onChange={obtenerDatosBusqueda}>
                            <option value="">--SELECCIONA UN TIPO--</option>
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.name}
                                    value={categoria.name}
                                >{categoria.name}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>
            </div>
        </Fragment>
    )
};

export default Buscador;