import React from 'react'
import "../Style/home_style.css";

const Navbar = () => {
  return (
    <>
       <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                <i class="fad fa-calendar"></i><a href="index.html" class="nav__logo">UW Plan</a>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar