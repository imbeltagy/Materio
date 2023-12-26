import { Button, Stack } from "@mui/material";

const FormActions = ({ handleSubmit, handleReset }) => {
  return (
    <Stack direction="row" gap={2}>
      <Button variant="contained" onClick={() => handleSubmit()}>
        save changes
      </Button>
      <Button variant="outlined" color="secondary" onClick={() => handleReset()}>
        reset
      </Button>
    </Stack>
  );
};

export default FormActions;
