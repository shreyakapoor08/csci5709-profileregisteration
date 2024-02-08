import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const { firstName, lastName, email } = location.state;

  if (!location.state) {
    return <Typography variant="body1">
    Error: Profile details not found
  </Typography>
  }

  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom style={{ color: "#fff", marginBottom: "20px", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
        Welcome, {firstName}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 18px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: "#A52A2A"}}>
          Profile Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>First Name:</strong> {firstName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Last Name:</strong> {lastName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> {email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Personal Detail:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfilePage;

