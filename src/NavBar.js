import React from "react";
import Button from "@mui/material/Button"
import {NavLink} from "react-router-dom";


function NavBar() {


  return(
    <div className="navbar">
      <Button 
      component={NavLink} 
      to="/Home" 
      variant = "contained" 
      color="primary"
      >

       Home 

      </Button>

      <Button 
      component={NavLink} 
      to="/createchore" 
      variant = "contained" 
      color="primary"
      >

       Create Chore 

      </Button>

      <Button 
      component={NavLink} 
      to="/createroom" 
      variant = "contained" 
      color="primary"
      >

       Create Room

      </Button>

      <Button 
      component={NavLink} 
      to="/login" 
      variant = "contained" 
      color="primary"
      >

      Login

      </Button>

    </div>
  )
}

export default NavBar;