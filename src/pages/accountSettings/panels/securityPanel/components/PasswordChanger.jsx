import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  CardContent,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const PasswordChanger = ({ register }) => {
  const mdBreakpoint = useTheme().breakpoints.up("md");

  const PasswordField = ({ name, label }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
      <FormControl fullWidth>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <OutlinedInput
          {...register(name)}
          id={name}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOffOutlined color="secondary" /> : <VisibilityOutlined color="secondary" />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
    );
  };

  return (
    <Stack sx={{ [mdBreakpoint]: { flexDirection: "row" } }} borderBottom={1} borderColor="divider">
      {/* Form Fields */}
      <CardContent sx={{ width: "100%" }}>
        <Stack>
          <Box marginBlock={3}>
            <PasswordField name="currentPassword" label="Current Password" />
          </Box>
          <Box marginBlock={2}>
            <PasswordField name="NewPassword" label="New Password" />
          </Box>
          <Box>
            <PasswordField name="confirmNewPassword" label="Confirm New Password" />
          </Box>
        </Stack>
      </CardContent>

      {/* Image */}
      <Box
        sx={{
          backgroundImage: "url(/images/pages/pose-m-1.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          width: "100%",
          minHeight: "16rem",
          marginTop: "2rem",
        }}
      ></Box>
    </Stack>
  );
};

export default PasswordChanger;
