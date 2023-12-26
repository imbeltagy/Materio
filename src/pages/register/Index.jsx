import { Button, Checkbox, FormControlLabel, Link, Stack, TextField, Typography } from "@mui/material";
import AuthPagesLayout from "/src/common/AuthPagesLayout";
import { useForm } from "react-hook-form";
import PasswordField from "/src/common/PasswordField";
import { Link as routerlink } from "react-router-dom";
const Register = () => {
  const { register, handleSubmit } = useForm();

  return (
    <AuthPagesLayout title="Adventure starts here 🚀" subtitle="Make your app management easy and fun!">
      <Stack spacing={2}>
        <TextField label="Username" {...register("username")} />
        <TextField label="Email" {...register("email")} />
        <PasswordField name="password" label="Password" register={register} />

        {/* Remember Me & Forget Password */}
        <FormControlLabel
          control={<Checkbox />}
          label={
            <>
              <Typography variant="body2" color="text.secondary" display="inline-block" mr=".5ch">
                I agree to
              </Typography>
              <Link underline="hover" href="#" fontSize=".8rem">
                privacy policy & terms
              </Link>
            </>
          }
        />

        {/* Submit */}
        <Button variant="contained" fullWidth>
          signup
        </Button>

        {/* Sign Up */}
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Already have an account?
          </Typography>
          <Link underline="hover" to="/logins" fontSize=".9rem" component={routerlink}>
            Login instead
          </Link>
        </Stack>
      </Stack>
    </AuthPagesLayout>
  );
};

export default Register;
