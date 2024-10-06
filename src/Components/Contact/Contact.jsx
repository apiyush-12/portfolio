import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contact'>
    <div className="contact-title">
    <h1>Get in touch</h1>
    <img src={theme_pattern} alt="" />
    </div>
        <div className='contact-content'>
        <div className="phone-no">
        <FontAwesomeIcon icon={faPhone} style={{ fontSize: '24px', color: 'white' }} />
            <p> +91-8116030786 </p>
        </div>

        <div className="email-id">
        <FontAwesomeIcon icon={faAt} style={{ fontSize: '24px', color: 'white' }} />
            <p> tezaryan2004@gmail.com </p>
            </div>
            </div>
    </div>
  )
}

export default Contact