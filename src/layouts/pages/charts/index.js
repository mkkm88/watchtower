// @mui material components
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

function Charts() {
  // State to store the data from the API
  const [dataTableData, setDataTableData] = useState({
    columns: [
      { Header: "Group Config Id", accessor: "groupConfigId" },
      { Header: "Group Name", accessor: "groupName" },
      { Header: "Group Value", accessor: "groupValue" },
      { Header: "Group Type", accessor: "groupType", width: "20%" },
      { Header: "Description", accessor: "description", width: "20%" },
      { Header: "Action", accessor: "action", width: "20%" },
    ],
    rows: [],
  });

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const basicAuth = "Basic " + btoa("Administrator:manageaudit");

      try {
        const response = await fetch(
          "http://localhost:5555/rad/BInRestInterface.restful.provider:configuration/groupConfig/all",
          {
            method: "POST", // Use the required method
            headers: {
              Authorization: basicAuth,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}), // Include a request body if required
          }
        ); // Replace with your actual API URL
        const data = await response.json();

        // Map the API response to the format expected by the DataTable
        const rows = data.groupConfigs.map((groupConfig) => ({
          groupConfigId: groupConfig.groupConfigId,
          groupName: groupConfig.groupName,
          groupValue: groupConfig.groupValue,
          groupType: groupConfig.groupType,
          description: groupConfig.description,
          action: (
            <MDBox display="flex" justifyContent="space-evenly">
              <IconButton color="primary" onClick={() => handleEdit(groupConfig.groupConfigId)}>
                <EditIcon />
              </IconButton>
              <IconButton color="secondary" onClick={() => handleDelete(groupConfig.groupConfigId)}>
                <DeleteIcon />
              </IconButton>
            </MDBox>
          ),
        }));

        setDataTableData((prevData) => ({
          ...prevData,
          rows: rows,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component is mounted

  // Function to handle editing
  const handleEdit = (id) => {
    console.log("Edit clicked for ID:", id);
    // Add your edit logic here
  };

  // Function to handle deletion
  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
    // Add your delete logic here
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Group Config
            </MDTypography>
            <MDTypography variant="button" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </MDTypography>
          </MDBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Charts;
