import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'

const MyWork = () => {
  return (
    <div className='mywork'>
        <h1>My latest work</h1>
        <div className="mywork-title">
           
    
    <img src={theme_pattern} alt="" />
    </div>
    <div className="mywork-container">
        <div className="project-images">
        <div className='project-1-img'>
            <h3>Weather Application</h3>
            <img src={project1} alt="" />
        </div>
        <div className='project-2-img'>
        <h3>Gov.link website</h3>
            <img src={project2} alt="" />
        </div>
        <div className='project-3-img'>
        <h3>Stone paper s</h3>
            <img src={project3} alt="" />
        </div>
        </div>
    </div>
    </div>
  )
}

export default MyWork