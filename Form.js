import React, { Component } from 'react'
import './Formlash.css';
export default class Form extends Component {
   
   constructor(props) {
       super(props) ; 
   
      this.state = {  FirstName :  "Please enter your First Name " , 
                      FamilyName: "Please enter your Family Name ",   
                           email: "Please enter your email id ",
                           mobileNo: "Could you please enter your Mobile or any Contact No ",
                           Message: "How are you my friend "
    
    
    
    
    }  
   
    }
   

  handlechangeall = (event ) => {   
         this.setState(  { [event.target.name]  : event.target.value        }  )


  } 

  handleSubmit = (event ) => {   

        alert( JSON.stringify(this.state)  );

      event.preventDefault();
   }

   
    render() {
        return (
            <div>
                <form  onSubmit  = { this.handleSubmit}  > 
                 <label>  First Name  </label>
                  <input type = " text  " name = "FirstName"  value = { this.state.FirstName     }  onChange = { this.handlechangeall   }  />   <br/> 
                
                  <label>  Family Name </label> <br/> 
                  <input type = " text  " name = "FamilyName" value  = { this.state.FamilyName  }   onChange = { this.handlechangeall   }   />   <br/> 

                  <label> Email </label> <br/> 
                   <input type = " email " name = "email"  value = { this.state.email }     onChange = { this.handlechangeall   }     />   <br/> 

                  <label>  Contact No:        </label>
                  <input type = " number " name  = "mobileNo"  value = { this.state.mobileNo  }    onChange = { this.handlechangeall  }   />   <br/> 


                  <label>  Message   </label> <br/>
                  <textarea value  = { this.state.Message   }  name  =  "Message"   
                      onChange = { this.handlechangeall  }   />   <br/> 

                 
                 
                 
                  <input type = "submit" value = "send"/> 
               
                </form>



            </div>
        )
    }
}
 

 