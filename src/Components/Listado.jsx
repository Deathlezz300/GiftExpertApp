import React from 'react';
import '../assets/styles/Listado.css';
import { Card } from './Card';
import { useEffect,useState } from 'react';
import { getGifs } from '../helpers/getGif';

export const Listado = ({elemento}) => {

  const [gifs, setGifs] = useState([]);

  useEffect(()=>{
    getGifs(elemento).then(data=>{
      setGifs(data);
    })
  },[elemento]);



  return (
    <>
        <div className='box-lista'>
            <h3 className='titulo-lista'>{elemento}</h3>
            <div className='grid-cards'>
              {gifs.map((gif)=>{
                return <Card key={gif.id} gif={gif}/>
              })}
            </div>
        </div>
    </>
  )
}
