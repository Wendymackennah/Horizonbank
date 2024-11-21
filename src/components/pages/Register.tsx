import React from "react";
import { Box, Button, TextField, Typography, MenuItem, FormControlLabel, Checkbox, Select, InputLabel, FormControl } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Signup from "../../assets/images/Signup.png"; 

const Register: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to MoBank Online
        </Typography>
        <Typography variant="h6" sx={{ color: "gray", mb: 4 }}>
          Unlock the Power of Smart Banking
        </Typography>
        {/* Image will be imported */}
        <Box component="img" src={Signup} alt="Bank Illustration" sx={{ width: "300px" }} />
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 6,
          bgcolor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Register
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray", mb: 4 }}>
          Transforming Your Financial Journey
        </Typography>

        {/* Form Fields */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="country-label">
            <PublicIcon sx={{ mr: 1 }} /> Select your country
          </InputLabel>
          <Select labelId="country-label" defaultValue="">
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Kenya">Kenya</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          variant="outlined"
          label="Account number"
          InputProps={{
            startAdornment: <PersonIcon sx={{ color: "gray", mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="ID Number"
          InputProps={{
            startAdornment: <CreditCardIcon sx={{ color: "gray", mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography sx={{ fontSize: "0.875rem" }}>
              By registering you agree with our <span style={{ color: "red" }}>Terms and Conditions</span>
            </Typography>
          }
          sx={{ mb: 3 }}
        />

       <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #117C2C, #3E70A1)', 
            color: '#fff',
            padding: '12px 0', // Adjusted padding
            fontWeight: 600,
            '&:hover': {
              background: 'linear-gradient(to right, #0072ff, #00b0ff)', // Hover effect
            },
          }}
          fullWidth
        >
          Complete Registration
        </Button>

        <Typography align="center" sx={{ mt: 2, fontSize: "0.875rem", color: "gray" }}>
          HAVE AN ACCOUNT? <span style={{ textDecoration: "underline", cursor: "pointer" }}>SIGN IN</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;

