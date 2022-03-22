import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/movielogo.png'

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-container'>
                <div className='brand'>
                    <Link to='/'><img src={Logo} alt="logo"/></Link>
                </div>

                <ul className='nav-links'>
                    <li>
                        <Link to='/'>Playlist</Link>
                    </li>
                    <li>
                        <Link to='/watched'>Watched</Link>
                    </li>
                    <li>
                        <Link to='/Add' className='btn'>+ Add</Link>
                    </li>
                    
                </ul>

            </div>
        </div>
    </header>
  )
}

export default Navbar