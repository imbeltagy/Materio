import { Button, Stack, Tooltip } from "@mui/material";

const FormActions = () => {
  return (
    <Stack direction="row" gap={2}>
      <Tooltip title="Console.log form data" arrow>
        <Button variant="contained" type="submit">
          save changes
        </Button>
      </Tooltip>
      <Button variant="outlined" color="secondary" type="reset">
        reset
      </Button>
    </Stack>
  );
};

export default FormActions;
