import React, { Fragment } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import CategoriasProvider from './context/CategoriasContext'
import PokemonProvider from './context/PokemonContext'



function App() {
  return (
    <CategoriasProvider>
      <PokemonProvider>
        <Fragment>
          <Header />
          <Main />
        </Fragment>
      </PokemonProvider>
    </CategoriasProvider>

  );
}

export default App;
