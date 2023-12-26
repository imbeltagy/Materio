import { CardContent, Stack } from "@mui/material";
import FormActions from "../../components/FormActions";
import PasswordChanger from "./components/PasswordChanger";
import TwoFactorAuth from "./components/twoFactorAuth";
import { useForm } from "react-hook-form";

const SecurityPanel = () => {
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} onReset={() => reset()}>
      <Stack spacing={2}>
        <PasswordChanger register={register} />
        <TwoFactorAuth />
        <CardContent>
          <FormActions />
        </CardContent>
      </Stack>
    </form>
  );
};

export default SecurityPanel;
