import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography, MenuItem, FormControlLabel, Checkbox, Select, InputLabel, FormControl } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Signup from "../../assets/images/Signup.png"; 
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



const Register2: React.FC = () => {
  const theme = useTheme();
  const islargeScreen = useMediaQuery(theme.breakpoints.up('md'));


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
      {
        islargeScreen && (
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
  
        )
      }
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


        <TextField
          fullWidth
          variant="outlined"
          label="Full name"
          InputProps={{
            startAdornment: <PersonIcon sx={{ color: "gray", mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          InputProps={{
            startAdornment: <EmailIcon  sx={{ color: "gray", mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          InputProps={{
            startAdornment: <LockOpenIcon sx={{ color: "gray", mr: 1 }} />,
          }}
          sx={{ mb: 3 }}
        />

        <TextField 
          fullWidth
          variant="outlined"
          label="Repeat Password"
          InputProps={{
            startAdornment: <LockOpenIcon sx={{ color: "gray", mr: 1 }} />,
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
         <Link
            to="/emailverification"
            style={{
             color:"#ffffff",
           }}
           >
            Complete Registration
         </Link>
       </Button>
        <Typography align="center" sx={{ mt: 2, fontSize: "0.875rem", color: "gray" }}>
          HAVE AN ACCOUNT?{" "} 
          <Link 
             to="/login" 
             style={{
              textDecoration:"underline",
              color:"#FF0000",
              cursor:"pointer",
             }}
          >
          Login
          </Link>

          
        </Typography>
      </Box>
    </Box>
  );
};

export default Register2;

