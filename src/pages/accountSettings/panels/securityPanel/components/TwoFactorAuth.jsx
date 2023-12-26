import { LockOpenOutlined, LockOutlined, VpnKeyOutlined } from "@mui/icons-material";
import { Avatar, Box, CardContent, Stack, Typography } from "@mui/material";

const TwoFactorAuth = () => {
  return (
    <CardContent>
      {/* Headding */}
      <Stack direction="row" spacing={1} alignItems="center">
        <VpnKeyOutlined />
        <Typography variant="h6" component="span">
          Two-factor authentication
        </Typography>
      </Stack>

      {/* content */}
      <Stack spacing={2} alignItems="center" textAlign="center" paddingBlock={2} marginInline="auto" maxWidth="25rem">
        {/* Icon */}
        <Avatar variant="rounded" sx={{ bgcolor: "primary.main", width: "3rem", height: "3rem" }}>
          <LockOpenOutlined sx={{ fontSize: "1.8rem" }} />
        </Avatar>

        {/* Text */}
        <Typography fontWeight="600">Two factor authentication is not enabled yet.</Typography>
        <Typography variant="body2" color="text.secondary">
          Two-factor authentication adds an additional layer of security to your account by requiring more than just a
          password to log in. Learn more.
        </Typography>
      </Stack>
    </CardContent>
  );
};

export default TwoFactorAuth;
