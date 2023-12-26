import { Box, Card, CardContent, Divider, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Brand from "/src/common/Brand";
import { FacebookRounded, GitHub, Google, Twitter } from "@mui/icons-material";

const Login = ({ title, subtitle, children }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ width: "100%", minHeight: "100svh", position: "relative", display: "grid", placeItems: "center" }}>
      {/* Background */}
      {mdUp ? (
        <>
          <Box
            sx={{
              backgroundImage: `url(/images/pages/auth-v1-mask-${mode}.png)`,
              backgroundSize: "100% 100%",
              width: "100%",
              height: "10vw",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(/images/pages/auth-v1-tree.png)`,
              backgroundSize: "cover",
              width: 248,
              height: 185,
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(/images/pages/auth-v1-tree-2.png)`,
              backgroundSize: "cover",
              width: 377,
              height: 289,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          ></Box>
        </>
      ) : null}

      {/* content */}
      <Card component="main" sx={{ position: "relative", width: "min(26rem, 90%)" }}>
        <CardContent sx={{ paddingInline: 2 }}>
          {/* Brand */}
          <Box mb={2} marginInline="auto" width="fit-content">
            <Brand />
          </Box>
          {/* Text */}
          <Typography variant="h5" fontWeight="500" component="h1">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={4}>
            {subtitle}
          </Typography>

          {children}

          <Divider sx={{ marginBlock: 3 }}>or</Divider>

          {/* Fast Login */}
          <Stack direction="row" justifyContent="center" flexWrap="wrap">
            {[
              <FacebookRounded sx={{ color: "#497CE2" }} />,
              <Twitter sx={{ color: "#1DA1F2" }} />,
              <GitHub sx={{ color: "#5B5B5C" }} />,
              <Google sx={{ color: "#DB4437" }} />,
            ].map((icon, i) => (
              <IconButton key={i}>{icon}</IconButton>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
