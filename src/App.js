import React, { Fragment } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import CategoriasProvider from './context/CategoriasContext'
import PokemonProvider from './context/PokemonContext'
import MovimientoProvider from './context/MovimientoContext'





function App() {
  return (
    <CategoriasProvider>
      <PokemonProvider>
        <MovimientoProvider>
          <Fragment>
            <Header />
            <Main />
          </Fragment>
        </MovimientoProvider>
      </PokemonProvider>
    </CategoriasProvider>

  );
}

export default App;
