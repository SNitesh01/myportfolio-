import React from 'react'

export const Header = () => {
  return (
    <div>
 <nav class="navbar navbar-expand-lg navbar-dark p-4">
  <div class="container-fluid">
    <a class="navbar-brand" style={{fontWeight:"bold", fontSize:"75px",marginLeft:"10%"}}>Nitesh</a>
    <button class="navbar-toggler mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mt-3 gap-3" style={{fontWeight:"bold", fontSize:"20px", marginLeft:"30%"}}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Resume</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ContactMe</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
