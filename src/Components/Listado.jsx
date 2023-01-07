import React from 'react';
import '../assets/styles/Listado.css';
import { Card } from './Card';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const Listado = ({elemento}) => {

  const {images, isLoading}=useFetchGifs(elemento);
  return (
    <>
        <div className='box-lista'>
            <h3 className='titulo-lista'>{elemento}</h3>
            <div className='grid-cards'>
              {images.map((gif)=>{
                return <Card key={gif.id} estado={isLoading} gif={gif}/>
              })}
            </div>
        </div>
    </>
  )
}
