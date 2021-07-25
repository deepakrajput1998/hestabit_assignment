import React from 'react'
import classes from "./StudentListing.module.css";
import {Home} from 'react-feather'
const StudentListing = () => {
    return (
        <div>
            <div style={{display:'flex'}} >
<span className={classes.StudentListing_title}>Student Information</span>
<div className={classes.StudentListing_seprator}></div>
 <span style={{marginTop:'5px'}}> <Home color='orange' /></span>
            </div>
            
        </div>
    )
}

export default StudentListing
