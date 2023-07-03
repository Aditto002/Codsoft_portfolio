import React, { useEffect, useRef, useState } from 'react'
import './services.css'
import desh from '../../assets/desh.png'
import toy from '../../assets/toy.png'
import chef from '../../assets/chef.png'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
const carousel = (slider) => {
    const z = 300
    function rotate() {
      const deg = 360 * slider.track.details.progress
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
      })
      rotate()
    })
    slider.on("detailsChanged", rotate)
  }
function Services() {
 
      const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel]
      )

    const items = [
        {
          image: desh,
          name: 'Sports Academy',
          details: 'Sports Academy is a full-stack web application that includes both an admin dashboard and a student dashboard. Features are Users can create accounts and register for any class.Users can pay online to register for classes.The admin has the power to add and remove classes.',
          livesite: "https://sprots-academies.web.app/",
          client:"https://github.com/Aditto002/sports-academies-client",
          server:"https://github.com/Aditto002/sports-academies-server"
        },
        {
          image: toy,
          name: 'Toy Car',
          details: 'Toy Car is a full-stack web application that includes authentication and a database. Features are User Users can create accounts or they can choose to log in with their Google account.Each user can view the cars associated with their accountCar.Users have the ability to add, remove, and update cars in their accounts. ',
          livesite: "https://toy-car-358ac.web.app/",
          client:"https://github.com/Aditto002/Toy_Car_Client",
          server:"https://github.com/Aditto002/Toy_Car_Server"
        },
        {
          image: chef,
          name: 'ChefSteps',
          details: 'ChefSteps is a web application that includes authentication.Features are Users can create accounts using their email and password, or they can choose to log in with their Google account.The web application offers a wonderful section featuring popular chefs. Users can view recipes from their favorite chefs.',
          livesite: "https://chefsteps-32f99.web.app/",
          client:"https://github.com/Aditto002/ChefSteps_client",
          server:"https://github.com/Aditto002/ChefSteps_servers"
        }
      ];
  return (
    <section id="services" className='project'>
         <h5>Recently I done</h5>
      <h2>Projects</h2>
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider " ref={sliderRef} >
          {items.map((card, index) => (
            <div className="carousel__cell number-slide1 card" key={index}>
              <div className="screenshot-container">
              <img src={card.image} alt="Card Image" className="screenshot-img"  />
              </div>
              <div className="card-content">
                <h2 className="card-name">{card.name}</h2>
                <p className="card-details">{card.details}</p>

                <div className="button-row">
                  <a href={card.livesite} target='_blank'><button className="small-button">Live site</button></a>
                  <a href={card.client} target='_blank'><button className="small-button" >Client site</button></a>
                  <a href={card.server} target='_blank'><button className="small-button">Server site</button></a>
                 
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services