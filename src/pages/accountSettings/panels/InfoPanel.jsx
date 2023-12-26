import {
  Box,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import FormActions from "../components/FormActions";
import { useForm } from "react-hook-form";
import DataField from "../components/DataFields";
// import {dayjs} from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

const fields = [
  {
    type: "textField",
    name: "phone",
    label: "Phone",
    placeholder: "(123) 456-7890",
    defaultValue: "",
  },
  {
    type: "textField",
    name: "website",
    label: "Website",
    placeholder: "https://example.com",
    defaultValue: "https://linkedin/in/imbeltagy",
  },
  {
    type: "select",
    name: "country",
    label: "Country",
    defaultValue: "usa",
    options: [
      { textValue: "USA", value: "usa" },
      { textValue: "UK", value: "uk" },
      { textValue: "Austrlia", value: "ast" },
      { textValue: "Germany", value: "ger" },
    ],
  },
  {
    type: "select",
    name: "languages",
    label: "Languages",
    defaultValue: "acitve",
    options: [
      { textValue: "English", value: "en" },
      { textValue: "Arabic", value: "ar" },
      { textValue: "French", value: "fr" },
    ],
  },
];

const InfoPanel = () => {
  const { register, handleSubmit, reset } = useForm();
  const [dateValue, setDateValue] = useState("");
  const [genderValue, setGenderValue] = useState("male");

  const onFormSubmit = (data) => {
    const modifiedData = {
      ...data,
      date: dateValue,
    };
    console.log(modifiedData);
  };
  return (
    <CardContent>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        onReset={() => {
          reset();
          setDateValue("");
          setGenderValue("");
        }}
      >
        {/* BIO */}
        <Box paddingBlock={2}>
          <TextField
            label="Bio"
            fullWidth
            multiline
            minRows={2}
            defaultValue="The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scalable 😀, and lightning 😍 fast search and discovery experiences."
            {...register("bio")}
          />
        </Box>

        {/* Other Fields */}
        <Grid container spacing={4} mt={-2} mb={4}>
          {/* Date */}
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date" value={dateValue} onChange={setDateValue} sx={{ width: "100%" }} />
            </LocalizationProvider>
          </Grid>

          {/* Regular Fields */}
          {fields.map((item) => (
            <Grid item xs={12} md={6} key={item.name}>
              <DataField {...item} register={register} />
            </Grid>
          ))}

          {/* Gender Choose */}

          <Grid item xs={12} md={6}>
            <FormControl>
              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="gender"
                value={genderValue}
                onChange={(e) => setGenderValue(e.target.value)}
              >
                <FormControlLabel {...register("gender")} value="male" control={<Radio />} label="Male" />
                <FormControlLabel {...register("gender")} value="female" control={<Radio />} label="Female" />
                <FormControlLabel {...register("gender")} value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <FormActions />
      </form>
    </CardContent>
  );
};

export default InfoPanel;
