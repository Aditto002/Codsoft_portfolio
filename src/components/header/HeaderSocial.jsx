import React from 'react'
import { BsLinkedin , BsGithub, BsFacebook} from 'react-icons/bs';
function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/aditto-koiri-a82335280/"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/Aditto002"><BsGithub/></a>
        <a href="https://www.facebook.com/aditto.koiri.9/"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial