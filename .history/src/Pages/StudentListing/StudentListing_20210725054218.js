import React from 'react'
import classes from "./StudentListing.module.css";
import {Home ,ChevronRight} from 'react-feather'
import DataTable from '../../Component/Common/DataTable/DataTable';
import { Sidedrawer } from '../../Component/Sidedrawer/Sidedrawer';
import { useRef } from 'react';
import Backdrop from '../../Component/Common/Backdrop/Backdrop';
const StudentListing = () => {
   const sideDrawerRef= useRef()
   const backDropRef= useRef()
   const backdropCancelHandler=()=>{
            backDropRef.current.style.display='none'
        }
    return (
      <div>
        <Backdrop
          onCancelHandler={backdropCancelHandler}
          backDropRef={backDropRef}
        />
        <Sidedrawer backDropRef={backDropRef} sideDrawerRef={sideDrawerRef} />
        <div className={classes.StudentListing_header}>
          <span className={classes.StudentListing_title}>
            Student Information
          </span>
          <div className={classes.StudentListing_seprator}></div>
          <span style={{ marginTop: "5px" }}>
            {" "}
            <Home color="orange" />
          </span>
          <span style={{ marginTop: "5px" }}>
            {" "}
            <ChevronRight color="black" />
            <ChevronRight style={{ marginLeft: "-15px" }} color="black" />
          </span>
          <span className={classes.StudentListing_title2}>
            Student Management
          </span>
        </div>
        <div className="">
          <DataTable backDropRef={backDropRef} sideDrawerRef={sideDrawerRef} />
        </div>
      </div>
    );
}

export default StudentListing
