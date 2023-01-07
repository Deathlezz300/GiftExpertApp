import React from 'react';
import '../assets/styles/Card.css';

export const Card = ({gif,estado}) => {
  return (
    <>
        <div className='card-gif'>
            <img className={estado? 'cargando':'imagen-gif'} src={gif.img} alt="" />
            <p className='nombre-gif'>{gif.title}</p>
        </div>
    </>
  )
}
