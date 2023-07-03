import React from 'react'
import CV from "../../assets/Aditto_koiri_Resume.pdf"
import { AiOutlineDownload } from 'react-icons/ai';

function CTA() {
  return (
    <div className='cta'>
          <a href={CV} download className='btn'>Resume</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA