import React from 'react'
import classes from "./Sidedrawer.module.css";

export const Sidedrawer = ({onOpenClick,...rest}) => {
    

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className={classes.closebtn}
            onclick={()=>{
                closeNav();
            }}
          >
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    );
}
