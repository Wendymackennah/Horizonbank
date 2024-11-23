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
        padding: "0 16px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Check Icon */}
      <CheckCircleIcon
        sx={{
          fontSize: 80,
          color: "#117C2C",
          marginBottom: "16px",
        }}
      />

      {/* Title */}
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
        Check Email to Complete
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "gray",
          maxWidth: "400px",
          marginBottom: "24px",
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

      {/* OTP Input */}
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <TextField
            key={index}
            variant="outlined"
            inputProps={{
              maxLength: 1,
              style: { textAlign: "center", fontSize: "1.5rem", width: "50px" },
            }}
          />
        ))}
      </Box>

      {/* Confirm Button */}
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #117C2C, #3E70A1)",
          color: "#fff",
          padding: "12px 0", // Adjusted padding for a bigger button
          fontWeight: 600,
          textTransform: "none",
          borderRadius: "8px",
          "&:hover": {
            background: "linear-gradient(to right, #0072ff, #00b0ff)",
          },
        }}
        fullWidth
      >
        Confirm
      </Button>
    </Box>
  );
};

export default EmailVerification;
