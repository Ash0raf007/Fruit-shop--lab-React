import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="container">

    <div className='cover'>
<h1>WELCOME TO OUR MARKET</h1>

<div className='position'>
<Link to="/store" className='link'> CLICK TO Go To Store</Link>
  
   
      </div>
    </div>

  
    </div>
  )
}

export default Home