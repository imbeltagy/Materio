import { CardContent, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormActions from "../../components/FormActions";
import TextFields from "./components/TextFields";
import ConfirmEmailAlert from "./components/ConfirmEmailAlert";
import UserPicture from "./components/UserPicture";

const AccountPanel = () => {
  const [avatarFile, setAvatarFile] = useState();
  const defaultAvatar = "/images/avatars/1.png";
  const [avatarSrc, setAvatarSrc] = useState(defaultAvatar);

  const { register, reset, handleSubmit, resetField } = useForm();

  const handleResetIMG = () => {
    setAvatarFile(null);
    setAvatarSrc(defaultAvatar);
  };

  const handleChange = (data) => {
    if (avatarFile != data.img[0]) {
      setAvatarSrc(URL.createObjectURL(data.img[0]));
      setAvatarFile(data.img[0]);
    }
  };

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <CardContent>
      <form
        onSubmit={handleSubmit(submitForm)}
        onChange={handleSubmit(handleChange)}
        onReset={() => reset(handleResetIMG)}
      >
        <Stack gap={4} pt={2} pb={4}>
          <UserPicture {...{ register, resetField, handleResetIMG, avatarSrc }} />

          <TextFields register={register} />

          <ConfirmEmailAlert />
        </Stack>

        {/* Form Actions */}
        <FormActions />
      </form>
    </CardContent>
  );
};

export default AccountPanel;
