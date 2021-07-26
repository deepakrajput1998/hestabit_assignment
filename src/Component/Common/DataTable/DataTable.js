import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Edit, Trash } from "react-feather";
import { useState } from "react";
import { useRef } from "react";

export default function DataTable({ sideDrawerRef, setEditUserDetail, ...rest }) {
  const [stateRow, setstateRow] = useState([
    {
      soft_deleted: false,
      profile_picture: " ",
      is_verified: true,
      is_blocked: false,
      status: 1,
      _id: "6040d6e1b8666c001204a3de",
      email: "ravikumarct_cse16@its.edu.in",
      first_name: "Ravi Ji",
      last_name: "Sharma",
      campus: "Irving",
      mobile_number: "999999999999",
      avatar: null,
      role: 1,
      createdAt: "2021-03-04T12:47:29.664Z",
      updatedAt: "2021-07-26T06:21:03.517Z",
      __v: 0,
      last_logged_in: "2021-06-08T13:02:31.818Z",
      student: {
        faces: [],
        _id: "60fe544fda57a36bcc777c43",
        student_id: "STIDI123",
        class_name: "IX",
        section: "D",
        dob: "2008-01-23",
        gender: "Male",
      },
    },
    {
      soft_deleted: false,
      profile_picture: " ",
      is_verified: true,
      is_blocked: false,
      status: 1,
      _id: "605328a231953b001189c553",
      email: "student-beta1@getnada.com",
      first_name: "Karamsaa11",
      last_name: "Kumar111",
      campus: "Coppell",
      mobile_number: "111111111111",
      role: 1,
      student: {
        faces: [],
        _id: "60f4d6ecda57a36bcc761613",
        student_id: "A00090000",
        class_name: "IX",
        section: "C",
        dob: "1998-07-02",
        gender: "female",
      },
      createdAt: "2021-03-18T10:17:06.642Z",
      updatedAt: "2021-07-19T01:35:40.121Z",
      __v: 1,
      avatar: null,
    },
    {
      soft_deleted: false,
      profile_picture: " ",
      is_verified: true,
      is_blocked: false,
      status: 1,
      _id: "60a268eeceb3c30011ee47b6",
      email: "ankit.hestabit@gmail.com",
      first_name: "Ankit",
      last_name: "Dubey",
      campus: "Hestabit",
      mobile_number: "1234567557",
      role: 1,
      student: {
        faces: [],
        _id: "60f4da48da57a36bcc761715",
        student_id: "STID123",
        class_name: "VI",
        section: "B",
        dob: "1996-07-15",
        gender: "Male",
      },
      createdAt: "2021-05-17T13:00:30.192Z",
      updatedAt: "2021-07-19T01:50:00.185Z",
      __v: 0,
      last_logged_in: "2021-06-04T13:58:16.754Z",
      avatar: null,
    },
    {
      soft_deleted: false,
      profile_picture:
        "https://vcaf.s3.eu-west-2.amazonaws.com/60a26a7eceb3c30011ee47bf-53a401.jpg",
      is_verified: true,
      is_blocked: false,
      status: 1,
      _id: "60a26a7eceb3c30011ee47bf",
      email: "student-stag2@vomoto.com",
      first_name: "Student",
      last_name: "stag 1",
      campus: "Coppell",
      mobile_number: "12345678",
      role: 1,
      student: {
        faces: [],
        _id: "60f4e946da57a36bcc7617fb",
        student_id: "STD145",
        class_name: "VI",
        section: "B",
        dob: "1998-02-01",
        gender: "MALE",
      },
      createdAt: "2021-05-17T13:07:10.118Z",
      updatedAt: "2021-07-19T02:53:58.485Z",
      __v: 6,
      last_logged_in: "2021-06-08T11:41:06.834Z",
      avatar: null,
    },
    {
      soft_deleted: false,
      profile_picture: " ",
      is_verified: true,
      is_blocked: false,
      status: 1,
      _id: "60a26ef3ceb3c30011ee47de",
      email: "student-stag3@vomoto.com",
      first_name: "hampi",
      last_name: "zampi",
      campus: "Irving",
      mobile_number: "5624865",
      role: 1,
      student: {
        faces: [],
        _id: "60f2f6f1da57a36bcc75fdb5",
        student_id: "STIDI123",
        class_name: "VI",
        section: "A",
        dob: "01-01-2008",
        gender: "MALE",
      },
      createdAt: "2021-05-17T13:26:11.008Z",
      updatedAt: "2021-07-17T15:27:45.579Z",
      __v: 0,
      last_logged_in: "2021-05-25T14:18:10.147Z",
      avatar: null,
    },
  ]);


  const openNav=()=> {
    sideDrawerRef.current.style.width = "350px";
    rest.backDropRef.current.style.display = "block";
  }
  const [datatable, seatatable] = React.useState({
    columns: [
      {
        label: "STUDENT ID",
        field: "sid",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "FIRST NAME",
        field: "fname",
        width: 270,
      },
      {
        label: "LAST NAME",
        field: "lname",
        width: 270,
      },
      {
        label: "CLASS",
        field: "class",
        width: 200,
      },
      {
        label: "SECTION",
        field: "section",
        sort: "asc",
        width: 100,
      },
      {
        label: "EMAIL ADDRESS",
        field: "email",
        sort: "disabled",
        width: 150,
      },
      {
        label: "CAMPUS",
        field: "campus",
        sort: "disabled",
        width: 100,
      },
      {
        label: "ACTION",
        field: "action",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: stateRow.map((data) => {
      return {
        sid: data.student.student_id,
        fname: data.first_name,
        lname: data.last_name,
        class: data.student.class_name,
        section: data.student.section,
        dob: data.student.dob,
        gender: data.student.gender,
        email: data.email,
        campus: data.campus,
        action: (
          <>
            <Edit
              style={{ cursor: "pointer", marginInline: "10px" }}
              onClick={() => {
                openNav();
                setEditUserDetail([
                  {
                    ...data,
                    sid: data.student.student_id,
                    fname: data.first_name,
                    lname: data.last_name,
                    class: data.student.class_name,
                    section: data.student.section,
                    dob: data.student.dob,
                    gender: data.student.gender,
                    email: data.email,
                    campus: data.campus,
                  },
                ]);
              }}
              color="blue"
              size={15}
            />{" "}
            <Trash color="red" size={15} />
          </>
        ),
      };
    }),
  });
  const [checkbox1, setCheckbox1] = React.useState("");

  const showLogs2 = (e) => {
    console.log(e);
    setCheckbox1(e);
  };

const dataTableRef=useRef()


console.log(dataTableRef.current)
  return (
    <>
      <MDBDataTableV5
        ref={dataTableRef}
        hover
        entriesOptions={[5,10,15]}
        onPageChange={(e) => {
          console.log(e, "jojikkn");
        }}
       
        entries={5}
        pagesAmount={4}
        data={datatable}
        checkbox
        headCheckboxID="id41"
        bodyCheckboxID="checkboxes41"
        getValueCheckboxes={(e) => {
          showLogs2(e);
        }}
        getValueAllCheckBoxes={(e) => {
          showLogs2(e);
        }}
        multipleCheckboxes
        filledCheckboxes
        pagingTop
        searchTop
        searchBottom={false}
      />
    </>
  );
}
