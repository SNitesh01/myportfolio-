import React, {useState} from 'react'
import './contact.css'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram,AiFillLinkedin } from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { BsGithub} from 'react-icons/bs'
import emailjs from 'emailjs-com'




export const Contact = () => {

  // const [inputs, setInputs] = useState({ });

  // const handleChange = (event) => {
    
  // const name = event.target.name;
  // const email = event.target.email;
  // const Message = event.target.textarea

  // setInputs([name])
   
  
  // };

  const handelSubmit = (event) => { 
    event.preventDefault();

    emailjs.sendForm('service_po9o4xf',
                     'template_um9hk6i',
                      event.target,
                       "JjNYyD_CTnG_kw_hw").then(res => {
                         console.log(res)
                       }).catch(err => console.log(err));

    //console.log(inputs);
  };
  


  return (
    <div>
    <div className='Contact'>
      <div className='heading mt-5'>
      <h4 style={{fontWeight:"bold", fontSize:"30px"}}>Contact Me</h4>      
      <span>Lets Keep In Touch</span>
      <div class="seperator-blob"><div>
      </div></div>

    <div className='row contactme mt-5'>
  
        <div className=' col-6 cntnr'>
        <h1>Get In Touch !!</h1>
       
        <form onSubmit={handelSubmit}>
        <div className='frn' style={{padding:"15px", textAlign:"start", color:"black", fontWeight:"bold", fontSize:"18px"}}>
        <label className="#">Name</label>
        <input type="text" name="name" className="form-control" aria-describedby="passwordHelpBlock" />
        
        <label className="mt-3">Email</label>
        <input type="email"   name="user_email" className="form-control" aria-describedby="passwordHelpBlock" />
       
        <label className="mt-3">Message</label>
        <textarea className="w-100" name="message" placeholder="Message" id="floatingTextarea"></textarea>
      
        <button  className="btn btn-success mt-3" value="send" type="submit">Send</button>

        </div>
        </form>
           
        </div>
        <div className='icon col-6'>
         <a class="active" aria-current="page" href="https://www.facebook.com/profile.php?id=100012030129842"><FaFacebook/></a>   
         <a class="active" aria-current="page" href="https://www.instagram.com/nitesh_srivastav01/"><AiFillInstagram/></a> 
         <a class="active" aria-current="page" href="itskynitesh@gmail.com"><MdEmail/></a> 
         <a class="active" aria-current="page" href="https://github.com/SNitesh01"><BsGithub/></a> 
         <a class="active" aria-current="page" href="https://www.linkedin.com/in/nitesh-srivastava-a67a691b7"><AiFillLinkedin/></a> 
        

           
        

        </div>
    </div> 
    
  
    </div>
</div>
</div>
  )
}
