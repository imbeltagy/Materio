import { Box, CardContent, Stack, useTheme } from "@mui/material";
import PasswordField from "/src/common/PasswordField";

const PasswordChanger = ({ register }) => {
  const mdBreakpoint = useTheme().breakpoints.up("md");

  return (
    <Stack sx={{ [mdBreakpoint]: { flexDirection: "row" } }} borderBottom={1} borderColor="divider">
      {/* Form Fields */}
      <CardContent sx={{ width: "100%" }}>
        <Stack>
          <Box marginBlock={3}>
            <PasswordField name="currentPassword" label="Current Password" register={register} />
          </Box>
          <Box marginBlock={2}>
            <PasswordField name="NewPassword" label="New Password" register={register} />
          </Box>
          <Box>
            <PasswordField name="confirmNewPassword" label="Confirm New Password" register={register} />
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
