import React, { useState } from "react";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";
import axios from "axios";

function Cover() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true);
    const basicAuth = "Basic " + btoa("Administrator:manageaudit");

    try {
      const response = await axios.post(
        "http://172.20.150.134:5555/auth/forgot-password",
        { email },
        {
          headers: {
            Authorization: basicAuth,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        setMessage("A reset email has been sent successfully.");
      } else {
        setMessage("Failed to send reset email. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={(e) => e.preventDefault()}>
            <MDBox mb={4}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={handleReset}
                disabled={loading}
              >
                {loading ? "Sending..." : "Reset"}
              </MDButton>
            </MDBox>
            {message && (
              <MDBox mt={2}>
                <MDTypography
                  variant="button"
                  color={message.includes("success") ? "success" : "error"}
                >
                  {message}
                </MDTypography>
              </MDBox>
            )}
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
