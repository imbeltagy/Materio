import { Avatar, Box, Button, Stack, Typography, useTheme } from "@mui/material";

const UserPicture = ({ register, resetField, handleResetIMG, avatarSrc }) => {
  const mdBreakpoint = useTheme().breakpoints.up("md");

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {/* Picture Preview */}
      <Avatar variant="rounded" sx={{ width: "7rem", height: "7rem" }} src={avatarSrc} />

      {/* Hidden Input */}
      <input accept="image/*" id="raised-button-file" type="file" {...register("img")} hidden />

      <Box>
        <Stack sx={{ [mdBreakpoint]: { flexDirection: "row" } }} gap={2} mb={2}>
          {/* Upload Picture */}
          <Button variant="contained" size="large" component="label" htmlFor="raised-button-file">
            upload new picture
          </Button>

          {/* Reset Picture */}
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              resetField("img");
              handleResetIMG();
            }}
          >
            reset
          </Button>
        </Stack>

        {/* Helper Text */}
        <Typography variant="subtitle2" color="text.secondary" fontWeight="400">
          Allowed PNG or JPEG. Max size of 800K.
        </Typography>
      </Box>
    </Stack>
  );
};

export default UserPicture;
