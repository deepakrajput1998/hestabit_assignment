import React from 'react'
import { useRef } from 'react';
import classes from "./Sidedrawer.module.css";

export const Sidedrawer = ({onOpenClick,...rest}) => {
    const closeRef=useRef

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    return (
      <div>
        <div
          ref={rest.sideDrawerRef}
          id="mySidenav"
          className={classes.sidenav}
        >
          <a
            href="javascript:void(0)"
            className={classes.closebtn}
            onClick={() => {
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
