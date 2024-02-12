import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";

export default function Profileregisteration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
  
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    } else if (!formData.firstName.match(/^[a-zA-Z]+$/)) {
      newErrors.firstName = "First name should contain only letters";
    }
  
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    } else if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
      newErrors.lastName = "Last name should contain only letters";
    }
  
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      newErrors.email = "Invalid email address";
    }
  
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!formData.password.match(/^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)) {
      newErrors.password = "Password should be at least 8 characters long and contain at least one alphabet, one number, and one special character";
    }
  
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
      setTimeout(() => {
        setShowSuccessMessage(true);
        setLoading(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/profile", {
          state: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
          },
        });
      }, 2000);
    }
  };
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSuccessMessage(false);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={4}
        md={7}
        sx={{
          background: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: "#fff",
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "100px",
          }}
        >
          Register With Us!
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 3,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            mt={4}
            mb={8}
            style={{ fontStyle: "italic" }}
          >
            Profile Registration
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                  value={formData.firstName}
                  error={!!errors.firstName}
                  helperText={errors.firstName && <MuiAlert severity="error">{errors.firstName}</MuiAlert>}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                  value={formData.lastName}
                  error={!!errors.lastName}
                  helperText={errors.lastName && <MuiAlert severity="error">{errors.lastName}</MuiAlert>}
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={formData.email}
              error={!!errors.email}
              helperText={errors.email && <MuiAlert severity="error">{errors.email}</MuiAlert>}
            />
            <TextField
              margin="normal"
              
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={handleChange}
              value={formData.password}
              error={!!errors.password}
              helperText={errors.password && <MuiAlert severity="error">{errors.password}</MuiAlert>}
            />
            <TextField
              margin="normal"
              
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              onChange={handleChange}
              value={formData.confirmPassword}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword && <MuiAlert severity="error">{errors.confirmPassword}</MuiAlert>}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Register"}
            </Button>
          </form>
        </Box>
      </Grid>
      <Snackbar open={showSuccessMessage} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" variant="filled">
          Registration Successful...Redirecting to the Profile Page
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
}
