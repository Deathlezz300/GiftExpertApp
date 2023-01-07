import React from 'react';
import { useState } from 'react';
import { GiftExpertApp } from './Components/GiftExpertApp'; 
import { Buscador } from './Components/Buscador';
import {Listado} from './Components/Listado';
export const App = () => {
  
  const [Categoria,setCategoria] = useState('Gifs Variados');
  
  const CambiarCategoria=(value)=>{
    setCategoria(value);
  };

  return (
    <>
        <GiftExpertApp/>
        <Buscador onCategory={(value)=>CambiarCategoria(value)}/>
        <Listado elemento={Categoria}/>
    </>
  )
}