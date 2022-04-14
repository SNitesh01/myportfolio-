import React from 'react'
import { About } from '../AboutMe/About'
import { Contact } from '../ContactMe/Contact'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Resume } from '../Resume/Resume'
import './Profile.css'



export const Profile = () => {
  return (
    <div>
    <div className='profile-container'>
      <Header/>
      <div className='row title'>
        <div className='col-6 title2'>
          <h4>Hello, I'M Nitesh</h4>
          <h2>Mern Stack Devloper</h2>
          <p>Knack of building applications with front and back end operations.</p>
         
          <div class="btns1 mt-5">
          <button class="btn btn-success">Hire Me</button>
          <a href={require('../Home/data/Niteshkumar1.pdf')} target='_blank' download="Niteshkumar.pdf">
          <button class="btn highlighted-btn">Get Resume</button>
          </a>
        </div> 
        </div>
        <div className='col-3 image'>
          <div className='bg'>
        </div>
    </div>
  </div>   
</div>
  <About/>
  <Resume/>
  <Contact/>

  <Footer/>
   






</div>
  )
}
