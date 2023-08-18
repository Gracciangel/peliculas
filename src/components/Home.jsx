import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
      <div className="home">
      <div className="containerBtn">
        <Link
          to={'/index'}
        ><button className='btnHome'>VER TITULOS</button></Link>
      </div>
      </div>
  )
}
