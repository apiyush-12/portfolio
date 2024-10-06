import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="profile image" />
        <h1><span>"Hi, I'm Tez Aryan,</span></h1>
        <h1> a passionate frontend developer."</h1> 
        <p> I’m a passionate frontend developer with a strong foundation in UI/UX designing. Currently pursuing my B.Tech degree at SRM University, I’m deeply committed to delivering high-quality projects with full dedication and focus. I pride myself on my ability to stay patient and persistent . I thrive in environments where I can bring ideas to life, continuously learning and growing as a developer."</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1X9Fr7WWIQsi4Dg0Knj7z7xyG2T5fLsDK/view?usp=drive_link" target="_blank" 
    rel="noopener noreferrer" >My resume</a></div>
        </div>
    </div>
  )
}

export default Hero         