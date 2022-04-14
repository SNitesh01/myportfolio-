import React from 'react'
import './about.css'

export const About = () => {
  return (
    <div>
    <div className='about'>
      <div className='heading mt-1'>
      <h4 style={{fontWeight:"bold", fontSize:"30px"}}>About Me</h4>      
      <span>Why Choose Me?</span>
      <div class="seperator-blob"><div>
      </div></div>
     
      <div className='container mt-4'>
      <div class="about-me-profile"></div>
      <div class="about-me-details">
        <span>Full stack web developer with background knowledge of MERN stacks with redux, 
              along with a knack of building applications with most efficiency. Strong professional 
              with a B.tech willing to be an asset for an organization.
        </span>

        <div className='highlights' style={{marginTop:"50px"}}>
        <span style={{fontWeight:"bold" ,fontSize:"20px"}}>Here are a Few Highlights:</span>
        </div>
        <div class="highlight mt-2">
          <div class="highlight-blob"></div>
          <span>Full Stack Web Devloper</span>
        </div>
        <div class="highlight">
          <div class="highlight-blob"></div>
          <span>Html, Css, JavaScript</span>
        </div> <div class="highlight">
          <div class="highlight-blob"></div>
          <span>Interactive Front End as per the design</span>
        </div> <div class="highlight">
          <div class="highlight-blob"></div>
          <span>React</span>
        </div> <div class="highlight">
          <div class="highlight-blob"></div>
          <span>Node Js</span>
        </div>
        <div class="highlight">
          <div class="highlight-blob"></div>
          <span>Managing database (Mongo-db)</span>
        </div> <div class="highlight">
          <div class="highlight-blob"></div>
          <span>Building REST API</span>
        </div>

      <div class="about-me-options">
          <button class="btn btn-success"> Hire Me </button>
          <a href={require('../Home/data/Niteshkumar1.pdf')} target='_blank' download="Niteshkumar.pdf">
          <button class="btn highlighted-btn">Get Resume</button>
          </a>
        </div>    
                   
      </div>  
      
    </div>
   
  </div>
</div> 
    </div>
  )
}
