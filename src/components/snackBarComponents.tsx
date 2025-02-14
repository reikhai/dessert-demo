import React, { FC } from "react";
import { Snackbar, SnackbarContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { amber, green, red, blue } from "@mui/material/colors";

// Defining types for the props passed into the Snackbar component
interface SnackbarProps {
  open: boolean;
  message: string;
  type?: "success" | "error" | "info" | "warning"; // Type of Snackbar (success, error, info, warning)
  duration?: number; // Duration for which the Snackbar will be visible
  onClose: () => void; // Function to close the Snackbar
}

const SnackbarComponent: FC<SnackbarProps> = ({
  open,
  message,
  type = "info",
  duration = 3000,
  onClose,
}) => {
  // Set background color based on the Snackbar type
  let backgroundColor:string = blue[500]; // Default to "info" color

  switch (type) {
    case "success":
      backgroundColor = green[500];
      break;
    case "error":
      backgroundColor = red[500];
      break;
    case "warning":
      backgroundColor = amber[700];
      break;
    default:
      break;
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <SnackbarContent
        message={message}
        sx={{ backgroundColor,textAlign:'center' }} // Apply background color dynamically
      />
    </Snackbar>
  );
};

export default SnackbarComponent;
