import React from 'react'
import "./ComponentsCss/Cards.css";
const Cards = ({ route, value }) => {
  return (
    <main>
      <img className='Card' src={route} alt="" />
      <p style={{ display: "flex", placeContent: "center" }}>{value}</p>
    </main>
  )
}

export default Cards