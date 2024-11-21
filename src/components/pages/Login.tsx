import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Signup from "../../assets/images/Signup.png"; // Image for illustration

const Login: React.FC = () => {
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
          Login
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray", mb: 4 }}>
          Access your MoBank account
        </Typography>

        {/* Form Fields */}
        <TextField
          fullWidth
          variant="outlined"
          label="Email Address"
          InputProps={{
            startAdornment: <PersonIcon sx={{ color: "gray", mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          InputProps={{
            startAdornment: <LockIcon sx={{ color: "gray", mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography sx={{ fontSize: "0.875rem" }}>
              Remember me
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
          Login
        </Button>

        <Typography align="center" sx={{ mt: 2, fontSize: "0.875rem", color: "gray" }}>
          DON'T HAVE AN ACCOUNT? <span style={{ textDecoration: "underline", cursor: "pointer" }}>SIGN UP</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;

