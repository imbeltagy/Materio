import { Stack, Typography } from "@mui/material";

const Brand = () => {
  return (
    <Stack direction="row" spacing={1.5} p="1rem 1.3rem">
      <img src="/images/apple-touch-icon.png" alt="Materio Logo" width="33" height="33" />
      <Typography fontWeight="600" letterSpacing=".5px" variant="h6" component="span">
        MATERIO
      </Typography>
    </Stack>
  );
};

export default Brand;
