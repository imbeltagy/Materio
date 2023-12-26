import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const Error = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        position: "relative",
        display: "grid",
        placeItems: "center",
      }}
    >
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
              transform: "scaleX(-1)",
            }}
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(/images/pages/auth-v1-tree-2.png)`,
              backgroundSize: "cover",
              width: 280,
              aspectRatio: 377 / 289,
              position: "absolute",
              bottom: "calc(10vw - 70px)",
              left: 0,
              transform: "scaleX(-1)",
            }}
          ></Box>
        </>
      ) : null}

      {/* Content */}

      <Stack justifyContent="center" textAlign="center">
        <Typography variant="h1" fontWeight="900">
          404
        </Typography>
        <Typography variant="h5" fontWeight="500" component="h2">
          Page Not Found
        </Typography>
        <Typography mb={6} variant="body2" color="text.secondary">
          We couldn′t find the page you are looking for.
        </Typography>
        <img
          src="/images/pages/404.png"
          alt="404"
          width="780"
          height="478"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Box mt={5}>
          <Button variant="contained" size="large">
            back to home
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Error;
