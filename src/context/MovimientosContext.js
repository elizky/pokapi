import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

//crear el context
export const MovimientosContext = createContext();


 const MovimientosProvider = (props) => {
     return (
         <MovimientosContext.Provider
            
         >
             {props.children}
         </MovimientosContext.Provider>
     );
 }
 
 export default MovimientosProvider;