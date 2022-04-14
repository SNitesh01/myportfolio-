import React from "react";
import "./resume.css";

export const Resume = () => {
  return (
    <div>
      <div className="resume mt-5">
        <div className="heading">
          <h4 style={{ fontWeight: "bold", fontSize: "30px" }}>Resume</h4>
          <span>My formal Bio Details</span>
          <div class="seperator-blob">
            <div></div>
          </div>
        </div>
        <div className="container2 mt-5">
        <div id="carouselExampleInterval" class="carousel slide w-100" data-bs-ride="carousel">
           <div class="carousel-inner">
             <div class="carousel-item active" data-bs-interval="">
                
                <div className="Education">
                <h1>Education !!</h1>
                  <h2>B.tech</h2>
                  <h3>Kurukshetra University Public university in Kurukshetra, Haryana</h3>
                  <div class="seperator-blob2">2022</div>

                </div>
                <div className="Education">
                  <h2>Class 12th</h2>
                  <h3>BSEB- Gopalganj, Patna</h3>
                  <div class="seperator-blob2">2018</div>
                </div>
                <div className="Education">
                  <h2>Class 10th</h2>
                  <h3>CBSE- Cholapur, Varanasi-UP</h3>
                  <div class="seperator-blob2">2016</div>
                </div>


             </div>
             <div class="carousel-item" data-bs-interval="0">
             <div className="Education">
             <h1>Work !!</h1>
                  <h2>ThinkNext pvt.</h2>
                  <h3>FULL STACK DEVELOPER INTERN</h3>
                  <div class="seperator-blob2">2022</div>
                  <p>
                  Currently working as MERN stack web and mobile developer and also an online instructor on udemy.<br/>
                  Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .<br/>
                  Integrated the web app with backend services to create new user onboarding application with dynamic form content.<br/>
                  I stretch my mental capacity to develope UI as per the given designs.
                  </p>
                </div>
             </div>
             <div class="carousel-item">
               <div className="Education">
               <h1>Projects !!</h1>
                  <h2>Personal-protfolio</h2>
                  <h3>Technologies Used: React JS, Bootsrap</h3>
                  <h6>A Personal Portfolio website to showcase all my details and projects at one place.</h6>
                  {/* <div class="seperator-blob2 ">2022</div> */}
                </div>
                <div className="Education">
                  <h2>Smart-drive</h2>
                  <h3>Technologies Used: React JS, Bootsrap</h3>
                  <h6>A Personal Portfolio website to showcase all my details and projects at one place.</h6>
                </div>
                <div className="Education">
                  <h2>Stop-Watch</h2>
                  <h3>Technologies Used: React JS, Bootsrap</h3>
                  <h6>A Personal Portfolio website to showcase all my details and projects at one place.</h6>
                </div>
             </div>
           </div>

           <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
           </button>
         </div>
   
          </div>
           
      </div>
    </div>
  );
};
