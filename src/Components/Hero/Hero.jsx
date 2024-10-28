import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="profile image" />
        <h1><span>"Hi, I'm Piyush kumar,</span></h1>
        <h1> a passionate software developer."</h1> 
        <p> I am Piyush Kumar pursuing my B. Tech Degree from S.R.M. University. I am
 fascinated by technology and the transformative impact it has on our world. I
 have developed web applications with HTML,CSS and Java Script, and
 explored the realms of different programming language(C ,C++ , Java ,Python).
 While my skill set is solid ,my real strength lies in my relentless drive to learn
 and adapt."</p>
        <div className='hero-action'> 
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1P7batkuIndZLbuVNs7P6W6s_T8zr-1R1/view?usp=drive_link" target="_blank" 
    rel="noopener noreferrer" >My resume</a></div>
        </div>
    </div>
  )
}

export default Hero
