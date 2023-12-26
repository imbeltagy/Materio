import { Button, Checkbox, FormControlLabel, Link, Stack, TextField, Typography } from "@mui/material";
import AuthPagesLayout from "/src/common/AuthPagesLayout";
import { useForm } from "react-hook-form";
import PasswordField from "/src/common/PasswordField";
import { Link as routerlink } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();

  return (
    <AuthPagesLayout title="Welcome to Materio! 👋🏻" subtitle="Please sign-in to your account and start the adventure">
      <Stack spacing={2}>
        <TextField label="Email" {...register("email")} />
        <PasswordField name="password" label="Password" register={register} />

        {/* Remember Me & Forget Password */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <FormControlLabel control={<Checkbox />} label="Rememer Me" />
          <Link underline="hover" href="#" fontSize=".9rem">
            Forgot Password?
          </Link>
        </Stack>

        {/* Submit */}
        <Button variant="contained" fullWidth>
          login
        </Button>

        {/* Sign Up */}
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            New on our platform?
          </Typography>
          <Link underline="hover" to="/register" fontSize=".9rem" component={routerlink}>
            Create an account
          </Link>
        </Stack>
      </Stack>
    </AuthPagesLayout>
  );
};

export default Login;
