import React, { useEffect } from 'react'
import './about.css'
import adi from "../../assets/adi1.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[])
  return (
    <section id='about'>
      <h5 data-aos="fade-down">Get To Know</h5>
      <h2 data-aos="fade-up">About Me</h2>
      <div className="container about__container">
        <div className="about__me" data-aos='fade-right'>
          <div className="about__me-image" >
            <img src={adi} alt="Aditto" />
          </div>

        </div>
        
        <div className="about__content" data-aos='fade-left'>
          <p>Hello I'm Aditto Koiri. I am currently a student at Leading University, pursuing a degree in the Computer Science and Engineering department I am a comparative programmer with a strong affinity for critical thinking and problem-solving. I am a Web Developer and discovered my love for creating web applications. I am proficient in several programming languages, including HTML, CSS, React, React Router, JavaScript, Express.js, Authentication, and Node.js. Additionally, I have Python, C, C++, and Java knowledge. I am always enthusiastic about learning new technologies and staying up-to-date with the latest advancements</p>

          <a href="#contact"className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>


    </section>
  )
}

export default About