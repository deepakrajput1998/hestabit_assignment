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
            <span className={classes.sidenav_title} >Edit Student</span>
            <span
              href="javascript:void(0)"
              className={classes.closebtn}
              onClick={() => {
                closeNav();
              }}
            >
              &times;
            </span>
          </div>
          <div className={classes.sidenav_container}>
           hi
          </div>
        </div>
      </div>
    );
}
