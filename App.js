import React from 'react';
import './Stylea.css';
import {Link } from 'react-router-dom';



const MainMenu = () => 
 { 
   return( 
          <div className  = " Style " >
            <ul> 
              <li> <Link to = "/Home "> Home </Link>                     </li>
              <li> <Link to = "/OurTeam " > Our Team</Link> </li>
              <li>   <Link to = "/OurPortfolio " > Our Portfolio</Link> </li>
              <li>   <Link to = "/OurTestimonials " > Our Testimonials</Link>   </li>
              <li>    <Link to = "/Contactus " > Contact us</Link>   </li>
            </ul> 
            
            </div> 
             
            
          
   ) 
    
          
  } 

    export default MainMenu 