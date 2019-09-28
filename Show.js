import React from 'react'; 
import MainMenu from './App'; 
import Home from './Home';
import OurTeam from './OurTeam';
import {BrowserRouter,Route,Switch  }from 'react-router-dom'; 
import OurPortfolio from './OurPortfolio';
import Testimonials from './Testimonials';
import Contactus from './Contact';




function Show() { 

return ( 
<BrowserRouter> 
<div> 
<MainMenu/> 
<Switch> 
<Route path = "/Home " component = {Home } /> 
<Route path  = "/OurTeam " component = {OurTeam } />
<Route path  = "/OurPortfolio " component = {OurPortfolio } />
<Route path  = "/OurTestimonials " component = {Testimonials } />
<Route path  = "/Contactus " component = {Contactus } />


</Switch>

</div>
</BrowserRouter>

)




} 

export default Show ; 