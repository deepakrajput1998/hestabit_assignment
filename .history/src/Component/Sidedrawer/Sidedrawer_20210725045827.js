import React from 'react'
import { useRef } from 'react';
import classes from "./Sidedrawer.module.css";

export const Sidedrawer = ({onOpenClick,...rest}) => {
    

    function closeNav() {
     rest.sideDrawerRef.current.style.width = "0";
    }
    return (
      <div>
        <div
          ref={rest.sideDrawerRef}
          id="mySidenav"
          className={classes.sidenav}
        >
          <div style={{ display: "flex" }}>
            {" "}
            <span>Edit Student</span>
            <a
              href="javascript:void(0)"
              className={classes.closebtn}
              onClick={() => {
                closeNav();
              }}
            >
              &times;
            </a>
          </div>
          <div className={classes.sidenav_container}>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    );
}
