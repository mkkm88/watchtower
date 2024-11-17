/**
=========================================================
* Material Dashboard 2 PRO React - v2.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const dataTableData = {
  columns: [
    { Header: "name", accessor: "name", width: "20%" },
    { Header: "position", accessor: "position", width: "25%" },
    { Header: "office", accessor: "office" },
    { Header: "age", accessor: "age", width: "7%" },
    { Header: "start date", accessor: "startDate" },
    { Header: "salary", accessor: "salary" },
  ],

  rows: [
    {
      name: "Hanny Baniard",
      position: "Data Coordiator",
      office: "Baorixile",
      age: 42,
      startDate: "4/11/2021",
      salary: "$474,978",
    },

    {
      name: "Lara Puleque",
      position: "Payment Adjustment Coordinator",
      office: "Cijangkar",
      age: 47,
      startDate: "8/2/2021",
      salary: "$387,287",
    },
    {
      name: "Torie Repper",
      position: "Administrative Officer",
      office: "Montpellier",
      age: 25,
      startDate: "4/21/2021",
      salary: "$94,780",
    },
  ],
};

export default dataTableData;
