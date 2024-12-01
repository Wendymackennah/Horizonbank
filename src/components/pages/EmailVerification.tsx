import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EmailVerification: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        width: "100vw",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <CheckCircleIcon
        sx={{
          fontSize: { xs: 60, sm: 80 },
          color: "#117C2C",
          marginBottom: "16px",
        }}
      />

      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "8px",
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
        }}
      >
        Check Email to Complete
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "gray",
          maxWidth: { xs: "90%", sm: "400px" },
          marginBottom: "24px",
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        Thank you for signing up with <strong>MOBANK</strong>, we are happy to
        welcome you aboard! Please check your{" "}
        <Typography
          component="span"
          sx={{
            color: "#3E70A1",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          email
        </Typography>{" "}
        to verify your account and{" "}
        <Typography
          component="span"
          sx={{
            color: "#3E70A1",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          complete
        </Typography>{" "}
        your registration.
        <br />
        <br />
        Don't forget to enter the 6-digit code sent to your email to finalize
        your account activation.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: { xs: "3px", sm: "5px" },
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <TextField
            key={index}
            variant="outlined"
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: "center",
                fontSize: "0.9rem",
                width: "28px",
                height: "40px",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                padding: "0",
              },
            }}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #117C2C, #3E70A1)",
          color: "#fff",
          padding: { xs: "8px 16px", sm: "12px 32px", lg: "12px 36px" },
          fontWeight: 600,
          textTransform: "none",
          borderRadius: "8px",
          fontSize: { xs: "0.8rem", sm: "1rem", lg: "1.1rem" },
          width: { xs: "80%", sm: "50%", lg: "25%" },
          "&:hover": {
            background: "linear-gradient(to right, #0072ff, #00b0ff)",
          },
        }}
      >
        Confirm
      </Button>
    </Box>
  );
};

export default EmailVerification;
