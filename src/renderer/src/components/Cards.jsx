import React from 'react'
import "./ComponentsCss/Cards.css";
const Cards = ({route}) => {
  return (
    <main>
        <img className='Card' src={route} alt="" />
    </main>
  )
}

export default Cards