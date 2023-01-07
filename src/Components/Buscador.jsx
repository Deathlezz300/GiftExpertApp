import React from 'react'
import '../assets/styles/Buscador.css';
import lupa from '../assets/Images/lupa.png';
import { useState } from 'react';

export const Buscador = ({onCategory}) => {

  const [inputValue, setInputValue]=useState('');

  const cambiarValor=(evento)=>{
    setInputValue(evento.target.value);
  };

  const EventoForm=(evento)=>{
    evento.preventDefault();
    onCategory(inputValue);
    setInputValue('');
  }

  return (
    <>
        <form className='box' onSubmit={EventoForm}>
            <p className='titulo2'>¿Que desea buscar?</p>
                <input id="input-buscar" value={inputValue} type="text" required className='input-buscador' placeholder='Escriba aqui' onChange={cambiarValor} />
        </form>
    </>
  )
}
