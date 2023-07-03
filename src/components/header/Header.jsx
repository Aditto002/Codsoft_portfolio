import React, { useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import ak from "../../assets/ak.png"
import HeaderSocial from './HeaderSocial'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Header() {
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[])
  return (
    <header>
        <div className="container header_container">
            <h5 data-aos="fade-right">Hello I'm</h5>
            <h1 data-aos="fade-left">Aditto Koiri</h1>
            <h5 className='text-light' data-aos="fade-right">Fullstack Developer</h5>
            <CTA></CTA>

                <HeaderSocial></HeaderSocial>

            <div className="me" data-aos="zoom-in-up">
                <img src={ak} alt="" />
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header