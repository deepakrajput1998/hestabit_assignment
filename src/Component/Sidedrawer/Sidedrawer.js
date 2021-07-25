import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { updateStudent } from '../../Pages/StudentListing/api';
import classes from "./Sidedrawer.module.css";

export const Sidedrawer = ({ EditUserDetail, onOpenClick, ...rest }) => {
  const [state, setstate] = useState({
    fname:'',
    lname:'',
    email:'',
    sId:'',
    mobile:'',
    dob:'',
    class:'',
    scssion:''
  })

  const [section, setSection] = useState([
    {
      _id: "6040d6db01affa0011338e22",
      campus_name: "Coppell",
      __v: 0,
    },
    {
      _id: "6040d6db01affa0011338e23",
      campus_name: "Irving",
      __v: 0,
    },
  ]);

  const [ClassSection, setClassSection] = useState([
    {
      _id: "6040d6da01affa0011338dd5",
      class_name: "I",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338dd6",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dd7",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dd8",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dd9",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dda",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dda",
          section: "F",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338ddb",
      class_name: "II",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338ddc",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338ddd",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dde",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338ddf",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338de0",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338de1",
      class_name: "III",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338de2",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de3",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de4",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de5",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de6",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338de7",
      class_name: "IV",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338de8",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de9",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338dea",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338deb",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338dec",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338e05",
      class_name: "IX",
      total_section: 5,
      total_class_student: 1,
      section: [
        {
          _id: "6040d6da01affa0011338e06",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e07",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e08",
          section: "C",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e09",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e0a",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338ded",
      class_name: "V",
      total_section: 5,
      total_class_student: 2,
      section: [
        {
          _id: "6040d6da01affa0011338dee",
          section: "A",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338def",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df0",
          section: "C",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df1",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df2",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338df3",
      class_name: "VI",
      total_section: 5,
      total_class_student: 5,
      section: [
        {
          _id: "6040d6da01affa0011338df4",
          section: "A",
          total_student: 2,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df5",
          section: "B",
          total_student: 2,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df6",
          section: "C",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df7",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df8",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338df9",
      class_name: "VII",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338dfa",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338dfb",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338dfc",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338dfd",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338dfe",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338dff",
      class_name: "VIII",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338e00",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e01",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e02",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e03",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e04",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338e0b",
      class_name: "X",
      total_section: 5,
      total_class_student: 1,
      section: [
        {
          _id: "6040d6da01affa0011338e0c",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e0d",
          section: "B",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e0e",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e0f",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e10",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338e11",
      class_name: "XI",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338e12",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e13",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e14",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e15",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e16",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338e17",
      class_name: "XII",
      total_section: 5,
      total_class_student: 1,
      section: [
        {
          _id: "6040d6da01affa0011338e18",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e19",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e1a",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e1b",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e1c",
          section: "E",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
      ],
    },
  ]);

  const [classSectionRelation, setclassSectionRelation] = useState([])
  
  useEffect(() => {
    setstate({
      fname: EditUserDetail[0] !== undefined ? EditUserDetail[0].fname : "",
      lname: EditUserDetail[0] !== undefined ? EditUserDetail[0].lname : "",
      email: EditUserDetail[0] !== undefined ? EditUserDetail[0].email : "",
      sId: EditUserDetail[0] !== undefined ? EditUserDetail[0].sid : "",
      mobile: EditUserDetail[0] !== undefined ? EditUserDetail[0].mobile : "",
    });
    setClassSection([
    {
      _id: "6040d6da01affa0011338dd5",
      class_name: "I",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338dd6",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dd7",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dd8",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dd9",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dda",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dda",
          section: "F",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338ddb",
      class_name: "II",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338ddc",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338ddd",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338dde",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338ddf",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.435Z",
          updatedAt: "2021-03-04T12:47:22.435Z",
        },
        {
          _id: "6040d6da01affa0011338de0",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338de1",
      class_name: "III",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338de2",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de3",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de4",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de5",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de6",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338de7",
      class_name: "IV",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338de8",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338de9",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338dea",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338deb",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338dec",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338e05",
      class_name: "IX",
      total_section: 5,
      total_class_student: 1,
      section: [
        {
          _id: "6040d6da01affa0011338e06",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e07",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e08",
          section: "C",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e09",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e0a",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338ded",
      class_name: "V",
      total_section: 5,
      total_class_student: 2,
      section: [
        {
          _id: "6040d6da01affa0011338dee",
          section: "A",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338def",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df0",
          section: "C",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df1",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df2",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338df3",
      class_name: "VI",
      total_section: 5,
      total_class_student: 5,
      section: [
        {
          _id: "6040d6da01affa0011338df4",
          section: "A",
          total_student: 2,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df5",
          section: "B",
          total_student: 2,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df6",
          section: "C",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df7",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
        {
          _id: "6040d6da01affa0011338df8",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.436Z",
          updatedAt: "2021-03-04T12:47:22.436Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338df9",
      class_name: "VII",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338dfa",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338dfb",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338dfc",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338dfd",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338dfe",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338dff",
      class_name: "VIII",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338e00",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e01",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e02",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e03",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e04",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338e0b",
      class_name: "X",
      total_section: 5,
      total_class_student: 1,
      section: [
        {
          _id: "6040d6da01affa0011338e0c",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e0d",
          section: "B",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e0e",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e0f",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e10",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338e11",
      class_name: "XI",
      total_section: 5,
      total_class_student: 0,
      section: [
        {
          _id: "6040d6da01affa0011338e12",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.437Z",
          updatedAt: "2021-03-04T12:47:22.437Z",
        },
        {
          _id: "6040d6da01affa0011338e13",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e14",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e15",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e16",
          section: "E",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
      ],
    },
    {
      _id: "6040d6da01affa0011338e17",
      class_name: "XII",
      total_section: 5,
      total_class_student: 1,
      section: [
        {
          _id: "6040d6da01affa0011338e18",
          section: "A",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e19",
          section: "B",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e1a",
          section: "C",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e1b",
          section: "D",
          total_student: 0,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
        {
          _id: "6040d6da01affa0011338e1c",
          section: "E",
          total_student: 1,
          createdAt: "2021-03-04T12:47:22.438Z",
          updatedAt: "2021-03-04T12:47:22.438Z",
        },
      ],
    },
  ])

  const output=  ClassSection.reduce((acc,curr)=>{
  if(acc[curr.class_name]){
    acc[curr.class_name] = acc[curr.section];
  }
  else{
    acc[curr.class_name] = curr.section;
  }
  return acc
    },{})
setclassSectionRelation(output)
console.log(output)

  }, [EditUserDetail[0]]);
  
  
  useEffect(() => {
  
  }, [])
  const onChangeHadler=(e)=>{
   const {name,value}=e.target
   if(name==='class'){
 setstate({ ...state, ['scssion']: '' });
   }
    setstate({...state,[name]:value})
  }
  const closeNav=()=> {
    rest.sideDrawerRef.current.style.width = "0";
    rest.backDropRef.current.style.display = "none";
  }

  const saveHandler=async()=>{
   const res=await updateStudent()
   const data=await res.json()
  }
  
  return (
    <div>
      <div ref={rest.sideDrawerRef} id="mySidenav" className={classes.sidenav}>
        <div style={{ display: "flex" }}>
          {" "}
          <span className={classes.sidenav_title}>Edit Student</span>
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
        <div className={classes.sidenav_seprator}></div>

        <div className={classes.sidenav_container}>
          <label className={classes.sidenav_label}>First Name</label>
          <input
            name={"fname"}
            onChange={(e) => onChangeHadler(e)}
            value={state.fname}
            type="text"
            className={classes.sidenav_input}
          />
          <label className={classes.sidenav_label}>Last Name</label>
          <input
            name={"lname"}
            onChange={(e) => onChangeHadler(e)}
            value={state.lname}
            type="text"
            className={classes.sidenav_input}
          />
          <label className={classes.sidenav_label}>Campus</label>
          <select type="text" className={classes.sidenav_input}>
            <option value="">Select..</option>
            {section &&
              section.map((data, i) => {
                return (
                  <option key={i} value={data.campus_name}>
                    {data.campus_name}
                  </option>
                );
              })}
          </select>
          <label className={classes.sidenav_label}>Student Id</label>
          <input
            name={"sId"}
            onChange={(e) => onChangeHadler(e)}
            value={state.sId}
            type="text"
            className={classes.sidenav_input}
          />
          <label className={classes.sidenav_label}>Date of Birth</label>
          <input
            name={"dob"}
            onChange={(e) => onChangeHadler(e)}
            value={""}
            type="date"
            className={classes.sidenav_input}
          />
          <label className={classes.sidenav_label}>Gender</label>
          <select type="text" className={classes.sidenav_input}>
            <option>Select..</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <label className={classes.sidenav_label}>Email Address</label>
          <input
            name={"email"}
            onChange={(e) => onChangeHadler(e)}
            value={state.email}
            type="email"
            className={classes.sidenav_input}
          />
          <label className={classes.sidenav_label}>Mobile No.</label>
          <input
            name={"mobile"}
            onChange={(e) => onChangeHadler(e)}
            value={state.mobile}
            type="number"
            className={classes.sidenav_input}
          />
          <label className={classes.sidenav_label}>Class</label>
          <select
            onChange={(e) => onChangeHadler(e)}
            name="class"
            type="text"
            className={classes.sidenav_input}
          >
            <option value="">Select..</option>
            {ClassSection &&
              ClassSection.map((data, i) => {
                return (
                  <option key={i} value={data.class_name}>
                    {data.class_name}
                  </option>
                );
              })}
          </select>
          <label className={classes.sidenav_label}>Section</label>
          <select name="scssion" className={classes.sidenav_input}>
            <option value="">Select..</option>
            {classSectionRelation[state.class] &&
              classSectionRelation[state.class].map((data, i) => {
                return (
                  <option key={i} value={data.section}>
                    {data.section}
                  </option>
                );
              })}
          </select>
        </div>
        <div className={classes.sidenav_seprator}></div>
        <button
          onClick={() => {
            saveHandler();
          }}
          className={classes.sidenav_successGreen}
        >
          Save
        </button>
        <button
          onClick={() => {
            closeNav();
          }}
          className={classes.sidenav_successPink}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
