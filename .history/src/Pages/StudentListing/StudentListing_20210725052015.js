import React from 'react'
import classes from "./StudentListing.module.css";
import {Home ,ChevronRight} from 'react-feather'
import DataTable from '../../Component/Common/DataTable/DataTable';
import { Sidedrawer } from '../../Component/Sidedrawer/Sidedrawer';
import { useRef } from 'react';
const StudentListing = () => {
   const sideDrawerRef= useRef()
    return (
      <div>
        <Sidedrawer sideDrawerRef={sideDrawerRef} />
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
          <DataTable sideDrawerRef={sideDrawerRef} />
        </div>
      </div>
    );
}

export default StudentListing
