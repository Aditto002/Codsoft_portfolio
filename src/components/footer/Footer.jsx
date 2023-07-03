import React from 'react'
import "./footer.css"
import adi from "../../assets/aditto.png"
import { BsLinkedin , BsGithub, BsFacebook} from 'react-icons/bs';

function Footer() {
  return (
    <footer>
        {/* <a href="#" className='footer__logo'>AK</a> */}
        <a href="#" className='footer__logo'> <img src={adi} alt="" className='logo'/></a> 

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer__socials'>   
        <a href="https://www.linkedin.com/in/aditto-koiri-a82335280/"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/Aditto002"><BsGithub/></a>
        <a href="https://www.facebook.com/aditto.koiri.9/"><BsFacebook/></a>
   </div>
   {/* <div className="footer__copyright">
    <small></small>
   </div> */}

    </footer>
  )
}

export default Footer