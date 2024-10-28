import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Skills.css'
const Skills = () => {
  return (
    <div className='about'>
        <div className='about-title'>
        <h1 >Skills</h1>
        <img src={theme_pattern} alt="" />
</div>

        <div className="about-right">
        <div className="about-para"><p>I have developed a solid foundation in  DATA STRUCTURE & ALGORITHM  using C/C++ language ...</p></div>
 
    <div className="about-skills">
        {/* <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "100%"}} /></div>
    
        <div className="about-skill"><p>Java-Script</p> <hr style={{width:"50%"}}/></div>
        <div className="about-skill"><p>C++ & Java</p> <hr style={{width:"80%"}}/></div>
        <div className="about-skill"><p>Figma</p> <hr style={{width:"80%"}}/></div>
    </div> */}
     <div className="about-skill"><p>Linked List</p> <hr style={{width:"80%"}}/></div>
        <div className="about-skill"><p>Stacks </p> <hr style={{width:"80%"}}/></div>
        <div className="about-skill"><p>Queue</p> <hr style={{width:"80%"}}/></div>
        <div className="about-skill"><p>Trees</p> <hr style={{width:"69%"}}/></div>
        <div className="about-skill"><p>Graph</p> <hr style={{width:"40%"}}/></div>
    </div>
    </div>
    </div>
  )
}

export default Skills