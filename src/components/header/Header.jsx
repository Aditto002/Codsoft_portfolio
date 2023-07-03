import React from 'react'
import './header.css'
import CTA from './CTA'
import ak from "../../assets/ak.png"
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Aditto Koiri</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA></CTA>

                <HeaderSocial></HeaderSocial>

            <div className="me">
                <img src={ak} alt="" />
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header