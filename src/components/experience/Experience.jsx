import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import tailwind from '../../assets/tailwind.png'
import bootstrap from '../../assets/bootstrap.png'
import javascript from '../../assets/javascript.png'
import reactjs from '../../assets/reactjs.png'
import firebase from '../../assets/firebase.png'
import figma from '../../assets/figma.png'
import mongodb from '../../assets/mongodb.png'
import nodejs from '../../assets/nodejs.png'
import express from '../../assets/express-logo.png'
import './experience.css'

function Experience() {
  const logos = [
    { image: html },
    { image: css },
    { image: tailwind },
    { image: bootstrap },
    { image: javascript },
    { image: reactjs },
    { image: firebase },
    { image: figma },
    { image: mongodb },
    { image: nodejs },
    { image: express },
  ];

  return (
    <section id='experience' className='skill'>
       <h5>What Skills I Have</h5>
      <h2>Skills</h2>
       
      <div className='image-content'>
        {logos.map((logo, index) => (
          <div key={index}>
            <img className='image-logo' src={logo.image} alt="" />
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience