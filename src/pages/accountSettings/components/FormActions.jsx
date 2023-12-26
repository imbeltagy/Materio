import { Button, Stack } from "@mui/material";

const FormActions = () => {
  return (
    <Stack direction="row" gap={2}>
      <Button variant="contained" type="submit">
        save changes
      </Button>
      <Button variant="outlined" color="secondary" type="reset">
        reset
      </Button>
    </Stack>
  );
};

export default FormActions;
