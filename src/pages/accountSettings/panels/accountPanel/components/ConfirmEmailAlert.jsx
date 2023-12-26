import { Alert, AlertTitle, useTheme, Link } from "@mui/material";
import { useState } from "react";

const ConfirmEmailAlert = () => {
  const mode = useTheme().palette.mode;
  const [open, setOpen] = useState(true);

  return open ? (
    <Alert
      sx={{ bgcolor: "rgba(255, 180, 0, 0.12)", "& path": { color: "warning.main" } }}
      severity="warning"
      onClose={() => setOpen(false)}
    >
      <AlertTitle {...(mode == "light" && { color: "warning.dark" })}>
        Your email is not confirmed. Please check your inbox.
      </AlertTitle>
      <Link color={`warning.${mode == "light" ? "dark" : "main"}`} href="#" underline="hover">
        Resend Confirmation
      </Link>
    </Alert>
  ) : null;
};

export default ConfirmEmailAlert;
