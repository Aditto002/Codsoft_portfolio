import React, { useState } from 'react'
import "./navs.css"
import { AiOutlineHome,AiOutlineUser,AiOutlineBook } from 'react-icons/ai';
import {RiServiceLine,RiContactsLine } from 'react-icons/ri';

function Nav() {
  const [activeNav,setActiveNave]=useState("#")
  return (
    <nav>
      <a href="#"onClick={()=>setActiveNave('#')} className={activeNav=='#'?'active':""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNave('#about')} className={activeNav=='#about'?'active':""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNave('#experience')} className={activeNav=='#experience'?'active':""}><AiOutlineBook/></a>
      <a href="#services" onClick={()=>setActiveNave('#services')} className={activeNav=='#services'?'active':""}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNave('#contact')} className={activeNav=='#contact'?'active':""}><RiContactsLine/></a>


    </nav>
  )
}

export default Nav