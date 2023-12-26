import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const DataField = ({ register, type, name, label, placeholder, defaultValue, options }) => {
  if (type == "textField") return <TextField fullWidth {...{ label, defaultValue, placeholder }} {...register(name)} />;
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

export default DataField;
