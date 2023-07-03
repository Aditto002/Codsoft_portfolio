import React from 'react'
import './about.css'
import adi from "../../assets/adi1.jpg"

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={adi} alt="Aditto" />
          </div>

        </div>
        
        <div className="about__content">
          <p>Hello I'm Aditto Koiri. I am currently a student at Leading University, pursuing a degree in the Computer Science and Engineering department I am a comparative programmer with a strong affinity for critical thinking and problem-solving. I am a Web Developer and discovered my love for creating web applications. I am proficient in several programming languages, including HTML, CSS, React, React Router, JavaScript, Express.js, Authentication, and Node.js. Additionally, I have Python, C, C++, and Java knowledge. I am always enthusiastic about learning new technologies and staying up-to-date with the latest advancements</p>

          <a href="#contact"className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>


    </section>
  )
}

export default About