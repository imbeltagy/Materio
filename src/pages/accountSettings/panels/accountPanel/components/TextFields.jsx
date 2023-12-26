import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const formControls = [
  {
    type: "textField",
    name: "username",
    label: "Username",
    defaultValue: "johnDoe",
  },
  {
    type: "textField",
    name: "name",
    label: "Name",
    defaultValue: "John Doe",
  },
  {
    type: "textField",
    name: "email",
    label: "Email",
    defaultValue: "johnDoe@example.com",
  },
  {
    type: "select",
    name: "role",
    label: "Role",
    defaultValue: "admin",
    options: [
      { textValue: "Admin", value: "admin" },
      { textValue: "Author", value: "author" },
      { textValue: "Editor", value: "editor" },
      { textValue: "Maintainer", value: "maintainer" },
      { textValue: "Subscriber", value: "subscriber" },
    ],
  },
  {
    type: "select",
    name: "status",
    label: "Status",
    defaultValue: "acitve",
    options: [
      { textValue: "Active", value: "active" },
      { textValue: "Inactive", value: "inactive" },
      { textValue: "Pending", value: "pending" },
    ],
  },
  {
    type: "textField",
    name: "company",
    label: "Company",
    defaultValue: "ABC Pvt. Ltd.",
  },
];

const TextFields = ({ register }) => {
  const DataField = ({ type, name, label, defaultValue, options }) => {
    if (type == "textField") return <TextField fullWidth {...{ label, defaultValue }} {...register(name)} />;
    if (type == "select")
      return (
        <FormControl fullWidth>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={`${name}`}
            defaultValue={options[0].value}
            label={label}
            {...register(name)}
          >
            {options.map(({ textValue, value: optionValue }) => (
              <MenuItem value={optionValue} key={optionValue}>
                {textValue}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
  };
  return (
    <Grid container spacing={3}>
      {formControls.map((item) => (
        <Grid item xs={12} md={6} key={item.name}>
          <DataField {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TextFields;
