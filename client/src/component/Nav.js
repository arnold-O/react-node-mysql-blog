import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav-header-section-wrapper'>
        <ul className='nav-links-wrapper'>
            <Link  className='nav-links' to="/">Home</Link>
            <Link  className='nav-links'  to="/tech">Tech</Link>
            <Link  className='nav-links'  to="/sport">Sport</Link>
            <Link  className='nav-links'  to="/life">lifestyle</Link>
        </ul>
      
    </nav>
  )
}
