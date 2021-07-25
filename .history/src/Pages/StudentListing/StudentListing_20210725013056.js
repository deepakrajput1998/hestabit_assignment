import React from 'react'
import classes from "./StudentListing.module.css";
import {Home ,ChevronRight} from 'react-feather'
const StudentListing = () => {
    return (
      <div>
        <div style={{ display: "flex" }}>
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
            <ChevronRight color="orange" />
          </span>
        </div>
      </div>
    );
}

export default StudentListing
