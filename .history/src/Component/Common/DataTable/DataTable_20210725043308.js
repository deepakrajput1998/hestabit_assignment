import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Edit, Trash } from "react-feather";
import { useEffect } from "react";

export default function DataTable({sideDrawerRef,...rest}) {
    useEffect(() => {
         console.log(sideDrawerRef && sideDrawerRef.current.style.width);
    }, [])
  
    function openNav() {
    sideDrawerRef.current.style.width = "550px";
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
    rows: [
      {
        sid: "Tiger Nixon",
        fname: "System Architect",
        lname: "Edinburgh",
        class: "61",
        section: "2011/04/25",
        email: "$320",
        campus: "$320",
        action: (
          <>
            <Edit style={{cursor:'pointer', marginInline:'10px'}} color='blue' size={15} />{" "}
            <Trash color='red' size={15} />
          </>
        ),
      },
      {
        sid: "Garrett Winters",
        fname: "Accountant",
        lname: "Tokyo",
        class: "63",
        section: "2011/07/25",
        email: "$170",
        campus: "$170",
        action: (
          <>
            <Edit style={{cursor:'pointer', marginInline:'10px'}} onClick={()=>{
                openNav()
            }} color='blue' size={15} /> <Trash color='red'  size={15} />
          </>
        ),
      },
      {
        sid: "Ashton Cox",
        fname: "Junior Technical Author",
        lname: "San Francisco",
        class: "66",
        section: "2009/01/12",
        email: "$86",
        campus: "$86",
        action: (
          <>
            <Edit style={{cursor:'pointer', marginInline:'10px'}} color='blue' size={15} /> <Trash color='red'  size={15} />
          </>
        ),
      },
      {
        sid: "Cedric Kelly",
        fname: "Senior Javascript Developer",
        lname: "Edinburgh",
        class: "22",
        section: "2012/03/29",
        email: "$433",
        campus: "$433",
        action: (
          <>
            <Edit style={{cursor:'pointer', marginInline:'10px'}} color='blue' size={15} /> <Trash color='red'  size={15} />
          </>
        ),
      },

      {
        sid: "Donna Snider",
        fname: "Customer Support",
        lname: "New York",
        class: "27",
        section: "2011/01/25",
        email: "$112",
        campus: "$112",
        action: (
          <>
            <Edit style={{cursor:'pointer', marginInline:'10px'}} color='blue' size={15} /> <Trash color='red'  size={15} />
          </>
        ),
      },
    ],
  });
  const [checkbox1, setCheckbox1] = React.useState("");

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
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
