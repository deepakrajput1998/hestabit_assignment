import React from 'react'
import classes from "./StudentListing.module.css";
import {Home ,ChevronRight} from 'react-feather'
import DataTable from '../../Component/Common/DataTable/DataTable';
import { Sidedrawer } from '../../Component/Sidedrawer/Sidedrawer';
import { useRef } from 'react';
import Backdrop from '../../Component/Common/Backdrop/Backdrop';
import { useEffect,useState } from 'react';
import { getListOfStudent } from './api';
const StudentListing = () => {
 const [EditUserDetail, setEditUserDetail] = useState([]);
  useEffect(async() => {
    let res,data;
    try {
       res = await getListOfStudent();
       data = await res.json(); 
    } catch (error) {
      console.log(error)
    }
  console.log(data)
  }, [])

   const sideDrawerRef= useRef()
   const backDropRef= useRef()
   const backdropCancelHandler=()=>{
            sideDrawerRef.current.style.width = "0";
           backDropRef.current.style.display = "none";
        }
    return (
      <div>
        <Backdrop
          onCancelHandler={backdropCancelHandler}
          backDropRef={backDropRef}
          sideDrawerRef={sideDrawerRef}
        />
        <Sidedrawer
          EditUserDetail={EditUserDetail}
          backDropRef={backDropRef}
          sideDrawerRef={sideDrawerRef}
        />
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
          <DataTable
            setEditUserDetail={setEditUserDetail}
            backDropRef={backDropRef}
            sideDrawerRef={sideDrawerRef}
          />
        </div>
      </div>
    );
}

export default StudentListing
