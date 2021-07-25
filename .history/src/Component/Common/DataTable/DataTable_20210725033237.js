import React from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function DataTable() {
  const [datatable, setDatatable] = React.useState({
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
        id: "Tiger Nixon",
        fname: "System Architect",
        lname: "Edinburgh",
        class: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        id: "Garrett Winters",
        fname: "Accountant",
        lname: "Tokyo",
        class: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        id: "Ashton Cox",
        fname: "Junior Technical Author",
        lname: "San Francisco",
        class: "66",
        date: "2009/01/12",
        salary: "$86",
      },
      {
        id: "Cedric Kelly",
        fname: "Senior Javascript Developer",
        lname: "Edinburgh",
        class: "22",
        date: "2012/03/29",
        salary: "$433",
      },
     
      {
        id: "Donna Snider",
        fname: "Customer Support",
        lname: "New York",
        class: "27",
        date: "2011/01/25",
        salary: "$112",
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
